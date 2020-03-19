import { trimStringSpecifically } from '../../lib/utils';
import { Router } from '../../routes';
import './styles.css';

const Bulletin = ({ stories }) => {
  return (
    <div className="bulletin__container" onClick={() => Router.pushRoute('/gigs')}>
      <p className="white flex-center">Covid | Unfortunately no gigs tonight</p>
    </div>
  );
};

export default Bulletin;
