import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { toast } from 'react-toastify'

export default class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            isValid: false
        }
        this.timer = null
    }

    handleInput = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    newUser = (event) => {
        event.preventDefault()

    axios({
        method: 'POST',
        url: 'https://insta.nextacademy.com/api/v1/users/',
        data: {
            username: this.state.username,
            email: this.state.email,    
            password: this.state.password
        }
    })
    .then(response => {
        toast(`${this.state.username} is successfully created!`)
        this.props.toggleModal()
    })
    .catch (error => {
        toast(`You have failed to create an account, congratulations!`)
    })

}

checkUsername = username => {
    axios.get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${username}`
    ).then(resp => {
        this.setState({
            isValid: resp.data.valid
        })
    })
}

handleUsernameInput = event => {
    clearTimeout(this.timer)

    const { value } = event.target

    this.setState({
        username: value
    })

    this.timer = setTimeout(() => {
        this.checkUsername(value)
    }, 300)
}

getInputProp = () => {
    const { isValid, username } = this.state
    if (username.length > 4) {
        if (isValid) {
            return { valid: true }
        } else {
            return { invalid: true }
        }
    } else {
        return {}
    }
}

render() {
    return (
        <Form onSubmit={this.newUser}>
            <FormGroup>
                <Label>Email</Label>
                <Input
                    value={this.state.email}
                    onChange={this.handleInput}
                    type="email"
                    name="email"
                />
            </FormGroup>
            <FormGroup>
                <Label>Username</Label>
                <Input
                    {...this.getInputProp()}
                    value={this.state.text}
                    onChange={this.handleUsernameInput}
                    type="text"
                    name="username"
                    placeholder="At least 5 characters"
                />
                <FormFeedback>Oh noes! That username is already taken</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input
                    value={this.state.password}
                    onChange={this.handleInput}
                    type="password"
                    name="password"
                />
            </FormGroup>
            <p onClick={this.props.toggleForm} className="text-info">
                Click here to Login!
            </p>
            <Button color="info">Submit</Button>
        </Form>
    )
}
}
