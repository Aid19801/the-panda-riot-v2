import { trimStringSpecifically } from '../../lib/utils';
import { Router } from '../../routes';
import './styles.css';

const Bulletin = ({ stories }) => {
  return (
    <div className="bulletin__container" onClick={() => Router.pushRoute('/gigs')}>
      <p className="white flex-center">Happening Tonight: </p>
      <div className="bulletin__row">
        {stories.map((each, i) => {
          return <h4 key={i}>{trimStringSpecifically(each.name, 22)}</h4>;
        })}
      </div>
    </div>
  );
};

export default Bulletin;
