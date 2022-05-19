// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { lyricsBtn, eventListen } from './button';
//  import renderLyrics from './renderLyrics';
import htmlStructure from './htmlStructure';

const startApp = () => {
  htmlStructure();
  lyricsBtn();
  eventListen();
};
startApp();
