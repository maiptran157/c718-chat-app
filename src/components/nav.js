import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
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
                        <li>
                            <Link to="/rooms">Chat Lobby</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;