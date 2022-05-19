import renderToDom from './renderToDom';

const htmlStructure = () => {
  const domString = '<div id="btn"></div><div id=LContainer></div>';
  renderToDom('#app', domString);
};

export default htmlStructure;
