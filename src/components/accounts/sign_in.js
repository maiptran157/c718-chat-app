import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../general/input';

class SignIn extends Component {
    render() {
        return (
            <div>
                <h1 className="center">Sign In</h1>
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'sign-in'
})(SignIn);

export default connect(null)(SignIn);