import React, { Component } from 'react'
import { connect } from 'react-redux';

class User extends Component {
    render() {
        const { user } = this.props;
        if (!user) return null;
        return (
            <h5>{user.name}</h5>
        )
    }
}

const mapStateToProps =  (state, ownProps) => {
    return { user : state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(User);