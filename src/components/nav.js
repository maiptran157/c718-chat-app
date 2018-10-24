import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
    renderLinks() {
        const { auth } = this.props;

        if (auth) {
            return (
                <Fragment>
                    <li>
                        <Link to="/rooms">Chat Lobby</Link>
                    </li>
                    <li>
                        <button className="btn orange">Sign Out</button>
                    </li>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        )

    }

    render() {

        return (
            <nav style={{
                padding: '0 12px'
            }} className="#00e5ff cyan accent-3">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo yellow-text">🔥Fire Chat🔥</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        {this.renderLinks()}

                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps)(Nav);