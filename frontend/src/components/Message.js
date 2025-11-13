import React, { useEffect } from 'react';

const Message = ({ text, type, onClose }) => {
    useEffect(() => {
        if (text && type) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [text, type, onClose]);

    if (!text || !type) return null;

    return (
        <div className={`message ${type}`}>
            {text}
        </div>
    );
};

export default Message;
