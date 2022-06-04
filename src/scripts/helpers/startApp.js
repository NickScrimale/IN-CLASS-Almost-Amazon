import { getBooks } from '../../api/bookData';
import { showBooks } from '../components/pages/books';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getAuthors } from '../../api/authorData';
import { showAuthors } from '../components/pages/authors';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getAuthors().then((authorsArray) => showAuthors(authorsArray));
  // TODO: Put all books on the DOM on App load
  getBooks(user.uid).then((booksArray) => showBooks(booksArray));
};

export default startApp;
