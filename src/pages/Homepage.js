import React from 'react'
import ImageContainer from '../ImageContainer.js'
import axios from 'axios'
import LoadingIndicator from '../LoadingIndicator.gif'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


export default class Homepage extends React.Component {
    state = {
        users: [],
        isLoading: true
    }


    componentDidMount() {
        axios('https://insta.nextacademy.com/api/v1/users')
            .then(resp => {
                this.setState({ users: resp.data, isLoading: false })
            })

    }

    render() {
        const { users, isLoading } = this.state
        if (isLoading) {
            return (
                <div id="loading">
                    <img src={LoadingIndicator}></img>
                </div>
            )
        }
        return (
            <div>
                <Navbar/>
                {
                    this.state.users.map(user => {
                        return (
                            <div key={user.id} className="insta">
                                <div className="profile">
                                    <Link to={`/users/${user.id}`} className="name">{user.username}</Link>
                                    <img id="image" width={"100px"} src={user.profileImage} alt="profilepic"></img>
                                </div>
                                <ImageContainer id={user.id} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

