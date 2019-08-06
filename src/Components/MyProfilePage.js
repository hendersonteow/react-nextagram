import React from 'react';
import axios from 'axios'
// import {  }

export default class MyProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = []
    }
}

componentDidMount() 

axios({
    method: 'GET',
    url: 'https://insta.nextacademy.com/api/v1/images/me',
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})
.then(response => {
})
.catch (error => {
    
})

