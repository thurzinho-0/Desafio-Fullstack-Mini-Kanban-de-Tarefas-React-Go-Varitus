import React from 'react';

const Loading = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Carregando...</p>
        </div>
    );
};

export default Loading;
