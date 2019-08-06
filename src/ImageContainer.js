import React from 'react'
import axios from 'axios'
import './App.css'
import Placeholder from 'react-graceful-image'

export default class ImageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        axios('https://insta.nextacademy.com/api/v1/images?userId=' + this.props.id)
            .then(resp => {
                let images = resp.data
                this.setState({images})
            })

    }

    render() {
        if (this.state.images.length === 0) return null
        return (
            <div id={this.props.isProfilePage ? 'container-profile' : 'container'}>
                {
                    this.state.images.map((image, index) => {
                        return (
                            <Placeholder key={`${this.props.id} + ${index}`} className="photos" width={"300px"} src={image} alt="photos"/> 
                        )
                    })
                }
            </div>
        )
    }

}