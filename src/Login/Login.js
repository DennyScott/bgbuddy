import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className="sign-in-form col col-md-6 push-md-3">
        <div className="sign-in-outline">
          <Form>
          <h3 className="sign-in-header"> Log In </h3>
            <FormGroup>
              <Label for="loginEmail">Email</Label>
              <Input type="email" name="email" id="loginEmail" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="loginPassword">Password</Label>
              <Input type="password" name="password" id="loginPassword" placeholder="" />
            </FormGroup>
            <Button>Login</Button>
          </Form>
          </div>

          <div className="sign-in-form-redirect">
             Need an account? <Link to="/signup/">Sign up here.</Link>
          </div>

      </div>
    );
  }
}
