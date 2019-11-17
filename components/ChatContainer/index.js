import Chat from '../Chat';
import './styles.css';

function ChatContainer({ user }) {
  return (
    <div className="col-sm-8">
      <div className="">{user && <Chat activeUser={user} />}</div>
    </div>
  );
}

export default ChatContainer;
