import React from 'react';
import './App.css';
import axios from 'axios';
import ImageContainer from './ImageContainer'
import LoadingIndicator from './LoadingIndicator.gif'
import { Route, Link } from 'react-router-dom'
import UserProfilePage from './UserProfilePage'
import Homepage from './pages/Homepage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import MyProfilePage from './Components/MyProfilePage'


export default class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     users: [],
  //     isLoading: true
  //   }
  // }

  // componentDidMount() {
  //   axios('https://insta.nextacademy.com/api/v1/users')
  //     .then(resp => {
  //       let users = resp.data
  //       this.setState({ users })
  //       this.setState({ isLoading: false })
  //     })

  // }

  render() {
    // const { users, isLoading } = this.state
    // if (isLoading) {
    //   return (
    //     <div id="loading">
    //       <img src={LoadingIndicator}></img>
    //     </div>
    //   )
    // }
    return (
      <div>
        <ToastContainer/>
        <div>   
          <Route exact path="/" component={Homepage} /> 
          <Route path="/users/:id" component={UserProfilePage} />
          <Route exact path="/profile" component={MyProfilePage} />
        </div>
        {/* {
          this.state.users.map(user => {
            return (
              <div key={user.id} id="insta">
                <div id="profile">
                  <h1 id="name">{user.username}</h1>
                  <img id="image" width={"100px"} src={user.profileImage} alt="profilepic"></img>
                </div>
                <ImageContainer id={user.id} />
              </div>
            )
          })
        } */}
      </div>
    )
  }
}

