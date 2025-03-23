import styles from './Chat.module.css';
import React, { useMemo, useEffect, useState, useRef } from 'react';
import Markdown from 'react-markdown';

const WELCOME_MESSAGE = {
    role: 'assistant',
    content: "Hello! How can I help you today?"
};

export function Chat({ messages }) {
    const messagesEndRef = useRef(null);

    const messagesGroups = useMemo(() =>
        messages.reduce((groups, message) => {
            const lastGroup = groups[groups.length - 1];
            if (lastGroup && lastGroup.role === message.role) {
                lastGroup.messages.push(message);
            } else {
                groups.push({
                    role: message.role,
                    messages: [message]
                });
            }
            return groups;
        }, []),
        [messages] 
    ); 

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]); 

    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
                <div key={index} data-role={role} className={styles.Messages}>
                    <Markdown>{content}</Markdown>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}
