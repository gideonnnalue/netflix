import React from 'react';
import {
    Row,
    Col,
    Container,
    Button
  } from "reactstrap";

import NarcosLogo from '../../resources/narcos_logo.png';

const featured = () => {
    return (
        <header className="featured_section">
            <Container className="pt-5">
                <Row>
                    <Col className="text-white align-middle mt-5">
                        <img src={NarcosLogo} alt=""/>
                        <h4 className="text-white">Season 2 now available</h4>
                        <p style={{ fontSize: "0.92rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
                        <br/>
                        <Button className="btn featured_btn_1 px-3 mr-3">Watch now</Button>
                        <Button className="btn featured_btn_2 px-3"><span style={{fontWeight: "bold"}}>+ </span>My list</Button>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default featured;