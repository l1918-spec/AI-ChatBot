import styles from './Chat.module.css';

export function Chat({ messages }) {
    return (
        <div className={styles.Chat}>
            {messages.map(({ role, content }, index) => (
            <div>
                
                <div key={index} data-role={role} className={styles.Messages}>
                    {content}
                    </div>
            </div>
        ))}
        </div>
    );
}