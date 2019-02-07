import React from 'react'
import {Button,Navbar, Nav, Form, FormControl} from 'react-bootstrap'


class NavBar extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Dinnder</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/local">Local</Nav.Link>
                    <Nav.Link href="/favorites">Favorites</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
            </Navbar>
        )
    }
}

export default NavBar