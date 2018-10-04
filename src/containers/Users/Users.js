import React, { Component } from 'react';

import User from '../../components/User/User';

class Users extends Component {
    state = {
        usersList: [
            {id: 1000, name: 'aSupahNickChosen'},
            {id: 1001, name: 'FernanityChamp'},
            {id: 1002, name: 'Fernanity'},
            {id: 1003, name: 'whatDaHellIsNickname'},
            {id: 1004, name: 'FernanityNation'},
            {id: 1005, name: 'Fergamer'}
        ]
    }

    render() {
        const users = this.state.usersList

        return (
            <div className='Users'>
                {users.map(u =>
                    <User key={u.id} name={u.name} />
                )}
            </div>
        )
    }
}

export default Users;