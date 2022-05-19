import getLyrics from './getLyrics';
import renderToDom from './renderToDom';

const renderLyrics = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    renderToDom('#LContainer', response.lyrics);
  });
};

export default renderLyrics;
