import './styles.css';

const Input = ({ 
    title,
    name,
    placeholder,
    onChange,

}) => {
    return (
        <div className="input__input-container">
            <h1>{title}</h1>
            <input
                name={name}
                className="input__input"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;