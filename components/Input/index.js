import './styles.css';

const Input = ({
  title,
  name,
  placeholder,
  onChange,
  type,
  selectOptions,
  secure
}) => {
  if (type && type === 'select') {
    return (
      <div className="input__input-container margin-top white">
        <h4>{title}</h4>
        <select className="input__input">
          {selectOptions.map((each, i) => {
            return (
              <option className="input__option" key={i}>
                {each}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  if (type && type === 'password') {
    return (
      <div className="input__input-container margin-top white">
        <h4>{title}</h4>
        <input
          name={name}
          className="input__input"
          placeholder={placeholder}
          onChange={onChange}
          type="password"
        />
      </div>
    );
  }


  if (!type) {
    return (
      <div className="input__input-container margin-top white">
        <h4>{title}</h4>
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
