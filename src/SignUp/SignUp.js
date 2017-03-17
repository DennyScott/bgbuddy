import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-in-form col col-md-6 push-md-3">
        <div className="sign-in-outline">
          <Form>
          <h3 className="sign-in-header"> Sign Up </h3>
            <FormGroup>
              <Label for="signUpEmail">Email</Label>
              <Input type="email" name="email" id="signUpEmail" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="signUpPassword">Password</Label>
              <Input type="password" name="password" id="signUpPassword" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="repeatPassword">Repeat Password</Label>
              <Input type="password" name="password" id="repeatPassword" placeholder="" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          </div>

          <div className="sign-in-form-redirect">
            Already have an account? <Link to="/login/">Log in here.</Link>
          </div>

      </div>
    );
  }
}
