import './styles.css';

const Input = ({
  title,
  name,
  placeholder,
  onChange,
  type,
  selectOptions,
  darkorange,
}) => {
  if (type && type === 'select') {
    return (
      <div className="input__input-container margin-top white">
        <h4>{title}</h4>
        <select name="genre" className="input__input" onChange={onChange}>
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
          className={darkorange ? 'input__dark-orange' : 'input__input'}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default Input;
