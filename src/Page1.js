import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {HelpBlock} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

class Page1 extends Component {

constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }



  render() {
    return (
      <div>

      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large">
      Large button
    </Button>
    <Button bsSize="large">Large button</Button>
  </ButtonToolbar>
  <ButtonToolbar>
    <Button bsStyle="primary">Default button</Button>
    <Button>Default button</Button>
  </ButtonToolbar>
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="small">
      Small button
    </Button>
    <Button bsSize="small">Small button</Button>
  </ButtonToolbar>
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="xsmall">
      Extra small button
    </Button>
    <Button bsSize="xsmall">Extra small button</Button>
  </ButtonToolbar>
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>


</div>
    );
  }
}

export default Page1;
