import { trimStringSpecifically } from '../../lib/utils';
import './styles.css';

const Bulletin = ({ stories }) => {
  console.log('AT | stories are ', stories);
  return (
    <div className="bulletin__container">
      <p className="white">Happening Tonight: </p>
      <div className="bulletin__row">
        {stories.map((each, i) => {
          return <h4 key={i}>{trimStringSpecifically(each.name, 22)}</h4>;
        })}
      </div>
    </div>
  );
};

export default Bulletin;
