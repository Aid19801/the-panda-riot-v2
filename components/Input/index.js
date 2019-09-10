import './styles.css';

const Input = ({ title, name, placeholder, onChange, type, selectOptions }) => {
  if (type && type === 'select') {
    return (
      <div className="input__input-container">
        <h1>{title}</h1>
        <select className="input__input">
          {selectOptions.map((each, i) => {
            return <option className="input__option" key={i}>{each}</option>;
          })}
        </select>
      </div>
    );
  }

  if (!type) {
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
    );
  }
};

export default Input;
