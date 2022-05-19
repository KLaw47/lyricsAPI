import renderToDom from '../helpers/renderToDom';
import renderLyrics from '../renderLyrics';

const domForm = () => {
  const domString = `<form>
  <div class="mb-3">
    <label for="artist" class="form-label">Artist</label>
    <input type="text" class="form-control" id="artist" required>
    <div id="artist" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="song" class="form-label">Song</label>
    <input type="text" class="form-control" id="song" required>
  </div>
  <button type="submit" class "btn btn-primary">SUBMIT</button>
</form>`;
  renderToDom('#formContainer', domString);
};
const eventListen = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputArtist = document.querySelector('#artist').value;
    const inputSong = document.querySelector('#song').value;

    renderLyrics(inputArtist, inputSong);
    form.reset();
  });
};
export { domForm, eventListen };
