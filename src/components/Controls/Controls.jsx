
import styles from './Controls.module.css';
export function Controls() {
    return (
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea className={styles.TextArea} placeholder="Message AI Chat-Bot"/>
            </div>
            <button className={styles.Button}>
                <SendIcon />
            </button>
        </div>
    );
}

function SendIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
        >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
    );
}
