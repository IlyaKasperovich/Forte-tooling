import printMe from './print.js';

import './style.css';
import Icon from './icon.png';

function component() {
  const element = document.createElement('div');
  

  element.innerHTML = ['Hello', 'webpack'].join(' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

//webpack v4+ will minify the code by default in production mode