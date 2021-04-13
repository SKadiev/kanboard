import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.navTitle}</Navbar.Brand>
        <Nav className="mr-auto">
          {props.navItems.map((el) => (
            <Nav.Link key={el.title} href={el.href}>
              {el.title}
            </Nav.Link>
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
