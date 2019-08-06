import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Modal from './Modal';


export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLoggedin: null
        }
    }

    componentDidMount() {
        this.updateUserLoggedIn()
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    updateUserLoggedIn = () => {
        if (localStorage.getItem('JWT')) {
            this.setState({
                isLoggedin: true
            })
        } else {
            this.setState({
                isLoggedin: false
            })
        }
    }

    logout = () => {
        localStorage.removeItem('JWT')
        this.updateUserLoggedIn()
    }

    render() {
        return (
            <div>
                {this.state.showModal && <Modal updateUserLoggedIn={this.updateUserLoggedIn} toggleModal={this.toggleModal} />}
                <Navbar style={{ backgroundColor: '#E7717D' }} light expand="md">
                    <img id="logo" width="50px" height="50px" src="https://cdn2.vectorstock.com/i/thumb-large/04/46/n-letter-logo-template-vector-11180446.jpg"></img>
                    <NavbarBrand href="/">Nextagram</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/users/1">My Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                {this.state.isLoggedin ? <NavLink onClick={this.logout}>Log Out</NavLink> : <NavLink onClick={this.toggleModal} href="#">Login</NavLink>}
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Settings
                         </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        General
                           </DropdownItem>
                                    <DropdownItem>
                                        Privacy
                           </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Delete Account
                           </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


{/* const Navbar = () => { */ }
{/* //     return (
    //         <nav>
    //             <Link to="/">Home</Link>
    //             <Link to="/users/1">My Profile</Link>
    //         </nav>
    //     )
    // } */}

