import React from 'react'
import axios from 'axios'
import ImageContainer from './ImageContainer';
import Navbar from './Components/Navbar'

export default class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    userId = this.props.match.params.id
    componentDidMount() {
        axios(`https://insta.nextacademy.com/api/v1/users/${this.userId}`)
            .then(resp => {
                let user = resp.data
                this.setState({ user })

            })
    }

    render() {
        return (
            <>
            <Navbar/>
            <div className="insta">
                <div className="profile">
                    {/* <h1>User Profile Page</h1> */}
                    <h1 id="name">{this.state.user.username}</h1>
                    <img id="image" width={"100px"} src={this.state.user.profileImage} alt="profilepic"></img>
                </div>
                <ImageContainer isProfilePage={true} id={this.userId} />
            </div>
            </>
            
        )
    }
}

