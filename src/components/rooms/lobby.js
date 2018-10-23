import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoomList } from '../../actions';

class Lobby extends Component {
    roomsRef = null;

    componentDidMount() {
        this.roomsRef = this.props.getRoomList();
        // console.log("Rooms Ref:", )
    }

    componentWillUnmount() {
        if (this.roomsRef) { return this.roomsRef.off() };
    }

    render() {
        console.log(this.props);

        const { roomList } = this.props;

        const roomElements = Object.keys(roomList).map(id => {
            const { description, title, topic } = roomList[id];
            const path = `/rooms/${id}`;

            return <li key={id} className="collection-item row">
                <div className="col m3 s12">
                    <b><Link to={path}>{title}</Link></b>
                </div>
                <div className="col m3 s12">
                    <Link to={path}>{topic}</Link>
                </div>
                <div className="col m6 s12">
                    <Link to={path}>{description}</Link>
                </div>
            </li>
        })

        return (
            <div>
                <h1 className="center"> 📱 Chat Lobby 📲 </h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/rooms/create" className="btn orange">Create Room</Link>
                    </div>
                    <ul className="collection rooms-list">
                        {roomElements}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        roomList: state.chat.roomList
    }
}

export default connect(mapStateToProps, {
    getRoomList
})(Lobby);