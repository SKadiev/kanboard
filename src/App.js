import './App.css';
import Navigation from './components/Navigation/Navigation';
import Members from './containers/Members/Members';
import Projects from './containers/Projects/Projects';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// show props and onHile
function App() {
  const [navigationItems, setNavigationItems] = React.useState([
    { title: 'projects', href: '/projects' },
    { title: 'members', href: '/members' },
  ]);

  return (
    <React.Fragment>
      <Navigation navTitle="Kanboard" navItems={navigationItems}></Navigation>
      <Switch>
        <Route path="/projects" exact component={Projects} />
        <Route path="/members" exact component={Members} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
