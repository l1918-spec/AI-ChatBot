import { useState } from 'react'
import styles from './App.module.css'
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';
function App() {
  const [messages, setMessages] = useState(MESSAGES); //set messages to store them
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/ordinateur.png"/>
        <h2 className={styles.Title}> AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer} >
        <Chat messages={messages} />
        </div>
        <Controls/>
    </div>
);

}
const MESSAGES = [
  {
    role: 'user',
    content: 'lorem ipsum',
  },
  {
    role: 'assistant',
    content: 'lorem ipsum',
  },
  {
    role: 'user',
    content: 'lorem ipsum',
  },
  {
    role: 'assistant',
    content: 'lorem ipsum',
  },
  {
    role: 'user',
    content: 'lorem ipsum',
  },
  {
    role: 'assistant',
    content: 'lorem ipsum',
  },
  {
    role: 'user',
    content: 'lorem ipsum',
  },
  {
    role: 'assistant',
    content: 'lorem ipsum',
  },
  {
    role: 'user',
    content: 'lorem ipsum',
  },
  {
    role: 'assistant',
    content: 'lorem ipsum',
  },
]

export default App
