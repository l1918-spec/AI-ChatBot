import styles from './Chat.module.css';
import React from 'react';
import Markdown from 'react-markdown';
const WELCOME_MESSAGE = {
    role: 'assistant',
    content: "Hello! How can I help you today?"
}
export function Chat({ messages }) {
    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
            <div>
                
                <div key={index} data-role={role} className={styles.Messages}>
                    <Markdown>{content}</Markdown>
                    </div>
            </div>
        ))}
        </div>
    );
}