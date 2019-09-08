import './styles.css';

const Input = ({ title, placeholder, onChange }) => {
    return (
        <div className="input__input-container">
            <h4>{title}</h4>
            <input
                className="input__input"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;