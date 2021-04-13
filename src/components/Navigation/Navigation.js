import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>{props.navTitle}</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          {props.navItems.map((el) => (
            <LinkContainer key={el.title} to={el.href}>
              <Nav.Link> {el.title}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
