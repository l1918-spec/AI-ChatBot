import styles from './Chat.module.css';
import React from 'react';
import Markdown from 'react-markdown';
import { useEffect, useState, useRef } from 'react';

const WELCOME_MESSAGE = {
    role: 'assistant',
    content: "Hello! How can I help you today?"
}
export function Chat({ messages }) {
    const messagesEndRef = useRef(null)
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior:'smooth'})
    }, [messages])


    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
            <div>
                
                <div key={index} data-role={role} className={styles.Messages}>
                    <Markdown>{content}</Markdown>
                    </div>
            </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}