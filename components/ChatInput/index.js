import './styles.css';

function ChatInput({ handleKeyUp, placeholder }) {
  return (
    <input
      type="text"
      className="chat__input"
      onKeyUp={handleKeyUp}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}

export default ChatInput;
