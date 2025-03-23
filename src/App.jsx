import { useState } from 'react'
import styles from './App.module.css'
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';

import { Assistant } from './assistants/googleai';
import { Loader } from './components/Loader/Loader';


function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]); //set messages to store them
  const[isloading, setLoading] = useState(false);
  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message ]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: 'user' });
    setLoading(true);
    try {
      const result = await assistant.chat(content);
      addMessage({content: result, role: 'assistant'});
    }
    catch (error) {
      addMessage({content:"Sorry, I Couldnt Help", role: 'system'});
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={styles.App}>
      {isloading && <Loader />}
      <header className={styles.Header}>
        <img className={styles.Logo} src="/ordinateur.png"/>
        <h2 className={styles.Title}> AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer} >
        <Chat messages={messages} />
        </div>
        <Controls isDisabeled={isloading} onSend = {handleContentSend} />
    </div>
);

}


export default App