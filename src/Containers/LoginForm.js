import React from 'react'
import { Button, Input, Form, FormGroup, Label } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ''       
    }}

    loginWebsite = (event) => {
        event.preventDefault()

        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/login',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
            .then(response => {
                toast(`You have login successfully!`)
                this.props.toggleModal()
                localStorage.setItem('JWT', response.data.auth_token)
                this.props.updateUserLoggedIn()

            })
            .catch(error => {
                toast(`You have failed to login, congratulations!`)
            })
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
            
            // username: event.target.value,
            // password: event.target.value <= cant use this 
        })
    }

    render() {
        return (
            <Form onSubmit={this.loginWebsite}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input onChange={this.handleInput} value={this.state.username} type="text" name="username" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input onChange={this.handleInput} value={this.state.password } type="password" name="password" />
                </FormGroup>
                <p onClick={this.props.toggleForm} className="text-success">New member? Sign up here.</p>
                <Button onClick={this.props.toggle}>Log In</Button>
                <Button onClick={this.props.toggle}>Cancel</Button>
            </Form>
        )
    }
}
