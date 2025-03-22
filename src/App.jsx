import { useState } from 'react'
import styles from './App.module.css'
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';

import { Assistant } from './assistants/googleai';


function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]); //set messages to store them
  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message ]);
  }

  async function handleContentSend(content) {
    addMessage({content, role: 'user'});
    try {
      const result = await assistant.chat(content);
      addMessage({content: result, role: 'assistant'});
    }
    catch (error) {
      addMessage({content:"Sorry, I Couldnt Help", role: 'system'});
    }
  }
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/ordinateur.png"/>
        <h2 className={styles.Title}> AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer} >
        <Chat messages={messages} />
        </div>
        <Controls onSend = {handleContentSend} />
    </div>
);

}


export default App