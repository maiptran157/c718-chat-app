import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import Input from '../general/input';

class SignUp extends Component {
    handleSignUp = (values) => {
        console.log('Sign Up:', values);
        const { signUp } = this.props;

        signUp(values);
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <div className="row">
                    <form className="col m8 s12 offset-m2" onSubmit={handleSubmit(this.handleSignUp)}>
                        <Field name="email" label="Email" component={Input} />
                        <Field name="username" label="Username" component={Input} />
                        <Field name="password" type="password" label="Password" component={Input} />
                        <Field name="confirmPassword" type="password" label="Confirm Password" component={Input} />
                        <div className="row">
                            <div className="col s12 right-align">
                                <button className="btn orange">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


function validate({ email, username, password, confirmPassword }) {
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email address'
    }
    if (!username) {
        errors.username = 'Please choose a username'
    }
    if (!password) {
        errors.password = 'Please choose a password'
    }
    if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
    }

    return errors;
}



SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, {
    signUp
})(SignUp)

//{email: "mia@test.com", username: "mia", password: "miatest", confirmPassword: "miatest"}