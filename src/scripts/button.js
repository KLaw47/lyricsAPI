import renderToDom from './renderToDom';
import renderLyrics from './renderLyrics';

const lyricsBtn = () => {
  const domString = '<button id="lyricsbtn" type="button" class="btn btn-success">Get lyrics</button>';
  renderToDom('#btn', domString);
};
const eventListen = () => {
  document.querySelector('#lyricsbtn').addEventListener('click', () => {
    renderLyrics('when in rome', 'the promise');
  });
};
export { lyricsBtn, eventListen };
