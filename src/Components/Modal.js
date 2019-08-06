import React, { Component } from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import LoginForm from '../Containers/LoginForm'
import SignUpForm from '../Containers/SignUpForm'


export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  toggleForm = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    return (
      <Modal isOpen={true} toggle={this.props.toggleModal}>
        {this.state.isLogin ? <ModalHeader toggle={this.props.toggleModal}>Sign Up</ModalHeader> : <ModalHeader toggle={this.props.toggleModal}>Login</ModalHeader>}
        <hr />
        {this.state.isLogin ? <SignUpForm toggleModal={this.props.toggleModal} toggleForm={this.toggleForm} /> : <LoginForm updateUserLoggedIn={this.props.updateUserLoggedIn} toggleModal={this.props.toggleModal} toggleForm={this.toggleForm} />}
      </Modal>
    )
  }
}

