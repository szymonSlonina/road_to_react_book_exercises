// main file for react components

import logo from './logo.svg';
import './App.css';
import React from 'react';

const title = 'REACT'; // if variable do not need anything from function body (component)
// declare it outside
const welcome = {
  greeting: 'hey',
  title: 'react',
};

function getByTitle(title) {
  return title;
}

// this is function component
// ROOT COMPONENT
const App = () => {//arrow functions

  const initialStories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Reduxx',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [rootShower, setRootShower] = React.useState('');

  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React'); // since this callback is used in parent
  // once search is changed (input), all structure get's reloaded

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const [stories, setStories] = React.useState(initialStories);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter((story) => item.objectID !== story.objectID);

    setStories(newStories);
  }

  // React hook.
  // each time searchTerm changes, function updating this search term will be triggered.
  // dependency array is 2 argument. Each time one of variables changes, function for side-effect is called.
  // if no argument - run on every render
  // if empty list - only once, after component render for 1 time.
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm])

  const filteredStories = stories.filter(story => story.title.includes(searchTerm)); // function that filters stories that do not match search term string.



  //something can be done here !
  return (
    // this is JSX syntax
    // JSX allows to execute functions, expressions ,etc...
    <div>
      <h1>HELLO WORLD, {title}</h1>
      <h2>{welcome.greeting} {welcome.title}</h2>
      <h3>{getByTitle(welcome.greeting)} {getByTitle(welcome.title)}</h3>
      <h4>rootShower = {rootShower}</h4>

      {/* comment in jsx */}
      <hr />
      <List list={filteredStories} onRemoveItem={handleRemoveStory} /> {/* passing react props to the component */}

      {/* React component composition. We can embeed elements into react. */}
      {/* And reuse them as children property inside component. */}
      <Search id="search" label="Search" value={searchTerm} onInputChange={handleSearch} onSearch={setRootShower} onSearch2={handleSearch} searchValue={searchTerm}>
        <strong>Search: </strong>
      </Search>
      {/* We use concept of controlled components, to initiate search input with value */}
    </div>
  );
}

// components should shale with complexity of app
// child of App
// instead of using global objects, we can pass props, and read them like
// js objects.
const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map(item => (
      <li key={item.objectID}>
        <Item item={item} onRemoveItem={onRemoveItem} />
      </li>
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        {/* Inline jsx. Allows to execute callback in Item right in jsx. */}
        <button type="button" onClick={() => onRemoveItem(item)}>Dismiss</button>
      </span>
    </div>
  );
}

//Child of App
// we can have default arguement like type.
const Search = ({ id, label, value, onInputChange, type = 'text', children }) => {
  // React state function
  // useState - initial state as argument
  // returns array with current state, and function to update state.
  const [searchTerm, setSearchTerm] = React.useState('');

  //const { onSearch2, searchValue, onSearch } = props;

  const handleChange = event => setSearchTerm(event.target.value); // handler function
  // for onChange event below
  // React's synthetic event - wrapper around browser's native event
  // ALWAYS PASS FUNCTIONS TO HANDLERS, NOT RETURN VALUE OF FUNCTION (EXCEPT WHEN RETURN IS A FUNCTION)

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} onChange={onInputChange} value={value} />

      <br />
      <p>
        searching for <strong>{searchTerm}</strong>
      </p>
      {/*onSearch(searchTerm)*/}
    </div>
  );
}

export default App;
