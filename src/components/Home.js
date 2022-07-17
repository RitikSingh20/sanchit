import React from 'react'
import { Container, Row, Col, Nav, Navbar, Card, Button } from "react-bootstrap"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



function Home() {
    return (
        <div>
            <div style={{ margin: "30px" }}>
                <Navbar >


                    <Nav className="me-auto">
                        <Nav.Link href="#home"><b>Market</b></Nav.Link>
                        <Nav.Link href="#features"><b>Popular</b></Nav.Link>
                        <Nav.Link href="#pricing"><b>Gym</b></Nav.Link>
                    </Nav>
                    <SearchOutlinedIcon />

                </Navbar>

            </div>
            <div>
            </div>

        </div>
    )
}

export default Home