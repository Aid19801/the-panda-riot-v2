import Button from './Button';
import Input from './Input';
import BlogPage from './BlogPage';
import NavBar from './NavBar';
import NewsContainer from './NewsContainer';
import ProfilePic from './ProfilePic';
import SignOutButton from './SignOut';

const PrismicTypes = {
    newsStory: BlogPage,
    // quotes: () => '',
  };
  

export {
    Button,
    Input,
    PrismicTypes,
    ProfilePic,
    NavBar,
    NewsContainer,
    SignOutButton,
}