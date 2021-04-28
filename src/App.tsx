import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from './components/UI/Spinner/Spinner'



const Projects = React.lazy(() => import('./containers/Projects/Projects'));
const Members = React.lazy(() => import('./containers/Members/Members'))

// show props and onHile
function App() {
  const [navigationItems, setNavigationItems] = React.useState([
    { title: 'members', href: '/members' },
    { title: 'projects', href: '/projects' },
  ]);

  return (
    <React.Fragment>
      <Suspense fallback={<Spinner />}>
      <Navigation navTitle="Kanboard" navItems={navigationItems}></Navigation>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/members" component={Members} />
        <Route path="/" exact component={Home} />
      </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
