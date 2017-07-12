import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work


const title = React.createElement('h1', {}, 'An Awesome Person');
const subtitle = React.createElement('p', {}, 'Who is learning React');

const item_1 = React.createElement('li', {}, 'JavaScript');
const item_2 = React.createElement('li', {}, 'React');
const item_3 = React.createElement('li', {}, 'Movies');
const item_4 = React.createElement('li', {}, 'Ice cream');
const list  = React.createElement('ul', { className: "my-interests"}, [item_1, item_2, item_3, item_4]);
const body = React.createElement('div', { className: "me"}, [title, subtitle, list]);



ReactDOM.render(
  body, 
  document.getElementById('root')
);

export default body
