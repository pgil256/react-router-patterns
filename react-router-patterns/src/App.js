import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import whiskey from './whiskey.jpg';
import duke from './duke.jpg';
import perry from './perry.jpg';
import tubby from './tubby.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/dogs'>
          <DogList dogs={App.defaultProps} />
        </Route>
        <Route path='/dogs/:name'>
          <DogDetails dogs={App.defaultProps} />
        </Route>
        <Redirect to='/dogs' />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!',
      ],
    },
    {
      name: 'Duke',
      age: 3,
      src: duke,
      facts: [
        'Duke believes that ball is life.',
        'Duke likes snow.',
        'Duke enjoys pawing other dogs.',
      ],
    },
    {
      name: 'Perry',
      age: 4,
      src: perry,
      facts: [
        'Perry loves all humans.',
        'Perry demolishes all snacks.',
        'Perry hates the rain.',
      ],
    },
    {
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina used to hate Tubby, but claims not to anymore.',
      ],
    },
  ],
};

export default App;