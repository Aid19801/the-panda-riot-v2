import Button from './Button';
import FunkyTitle from './FunkyTitle';
import Input from './Input';
import BlogPage from './BlogPage';
import NavBar from './NavBar';
import NewsContainer from './NewsContainer';
import ProfilePic from './ProfilePic';
import SignOutButton from './SignOut';
import Spinner from './Spinner';

const PrismicTypes = {
    newsStory: BlogPage,
    // quotes: () => '',
  };
  

export {
    Button,
    FunkyTitle,
    Input,
    PrismicTypes,
    ProfilePic,
    NavBar,
    NewsContainer,
    SignOutButton,
    Spinner,
}