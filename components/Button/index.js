import React from 'react'
import './styles.css';

function Button({ text, color, onClick, disabled }) {
    return (
        <button
            type="button"
            className={ color === 'orange' ? `btn btn-warning max-height-50` : `btn btn-secondary w-100 max-height-50`}
            onClick={!disabled ? onClick : null}
        >{text}
        </button>
    )
}

export default Button;