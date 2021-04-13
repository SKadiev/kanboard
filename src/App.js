import logo from './logo.svg';
import './App.css';
import Button from './components/UI/Button/Button';
import Modal from './components/UI/Modal/Modal';
import Navigation from './components/Navigation/Navigation';
import Members from './containers/Members/Members';
import Projects from './containers/Projects/Projects';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

// show props and onHile
function App() {
  const [modalShow, setModalShow] = React.useState(false);

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
