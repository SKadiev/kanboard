import './App.css';
import Navigation from './components/Navigation/Navigation';
import Members from './containers/Members/Members';
import Projects from './containers/Projects/Projects';
import Home from './containers/Home/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// show props and onHile
function App() {
  const [navigationItems, setNavigationItems] = React.useState([
    { title: 'members', href: '/members' },
    { title: 'projects', href: '/projects' },
  ]);

  return (
    <React.Fragment>
      <Navigation navTitle="Kanboard" navItems={navigationItems}></Navigation>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/members" component={Members} />
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
