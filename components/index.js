import Button from './Button';
import Input from './Input';
import BlogPage from './BlogPage';
import NavBar from './NavBar';
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
    SignOutButton,
}