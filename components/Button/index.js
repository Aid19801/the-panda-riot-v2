import React from 'react'
import './styles.css';

function Button({ text, color, onClick }) {
    return (
        <div
            className={`button__button-container ${color}`}
            onClick={onClick}
            >
            <h4>{text}</h4>
        </div>
    )
}

export default Button;