import { useState } from 'react'
import styles from './App.module.css'
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';
function App() {
  const [messages, setMessages] = useState([]); //set messages to store them

  function handleContentSend(content) {
    setMessages((prevMessages)=>[...prevMessages, {role: 'user', content}]);
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