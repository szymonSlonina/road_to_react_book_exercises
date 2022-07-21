// main file for react components

import logo from './logo.svg';
import './App.css';

const title = 'REACT'; // if variable do not need anything from function body (component)
// declare it outside
const welcome = {
  greeting: 'hey',
  title: 'react',
};

function getByTitle(title) {
  return title;
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// this is function component
// ROOT COMPONENT
const App = () => //arrow functions
  //something can be done here !
  (
    // this is JSX syntax
    // JSX allows to execute functions, expressions ,etc...
    <div>
      <h1>HELLO WORLD, {title}</h1>
      <h2>{welcome.greeting} {welcome.title}</h2>
      <h3>{getByTitle(welcome.greeting)} {getByTitle(welcome.title)}</h3>

      {/* comment in jsx */}
      <hr />
      <List />

      <Search />
    </div>
  );

// components should shale with complexity of app
// child of App
const List = () => (
    <ul>
      {list.map(item => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        ))}
    </ul>
  );

//Child of App
const Search = () => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' />
  </div>
);

export default App;
