import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../../actions/users'

class SingleUser extends Component {
    componentDidMount() {
        if (this.props.users && this.props.users.length === 0)
            this.props.dispatch(getAllUsers())
    }
    
    render() { 
        const { users, history } = this.props
        const userId = this.props.match.params.id
        const user = (users && userId) ? users.find(u => u.id===userId) : null
        
        return (
            <div>
                {user
                    ? (
                        <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                    : null
                }
                <p>
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                        history.goBack()}}
                    >
                        Voltar
                    </a>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
 
export default connect(mapStateToProps)(SingleUser)