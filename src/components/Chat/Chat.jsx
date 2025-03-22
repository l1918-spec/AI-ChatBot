import styles from './Chat.module.css';

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
                    {content}
                    </div>
            </div>
        ))}
        </div>
    );
}