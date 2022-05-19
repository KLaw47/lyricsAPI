// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { domForm, eventListen } from './components/form';
//  import renderLyrics from './renderLyrics';
import htmlStructure from './components/htmlStructure';

const startApp = () => {
  htmlStructure();
  domForm();
  eventListen();
};
startApp();
