import getLyrics from '../api/getLyrics';
import renderToDom from './helpers/renderToDom';

const renderLyrics = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    renderToDom('#LContainer', response.lyrics);
  });
};

export default renderLyrics;
