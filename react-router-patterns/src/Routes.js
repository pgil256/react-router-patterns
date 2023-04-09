import { Switch, Route, Redirect } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path='/dogs'>
        <Dogs dogs={dogs} />
      </Route>
      <Route path='/dogs/:name'>
        <Dog dogs={dogs} />
      </Route>
      <Redirect to='/dogs' />
    </Switch>
  );
};

export default Routes;
