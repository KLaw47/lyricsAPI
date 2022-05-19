import renderToDom from '../helpers/renderToDom';

const htmlStructure = () => {
  const domString = '<div id="formContainer"></div><div id=LContainer></div>';
  renderToDom('#app', domString);
};

export default htmlStructure;
