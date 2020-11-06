import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import '../components/MainElements.css'
import BB from "../../images/clients/Brompton-Bicycle.png";
import Eon from "../../images/clients/eon.png";
import JCB from "../../images/clients/jcb.png";
import BAE from "../../images/clients/bae.png";
import HB from "../../images/clients/Holland-Barrett.png";
import ICAEW from "../../images/clients/ICAEW.png";
import Du from "../../images/clients/durable.png";
import TA from "../../images/clients/test-aankoop.png";
const Portfolio = () => {

  return (
        <>        
        <div className="pt50 pb50">
            <Container>
                <Row>
                    <Col><img src={BB} class="img-fluid" alt="Clients" /></Col>
                    <Col><img src={HB} class="img-fluid" alt="Clients" /></Col>
                    <Col><img src={Eon} class="img-fluid" alt="Clients" /></Col>
                    <Col><img src={JCB} class="img-fluid" alt="Clients" /></Col>
                </Row>
                <Row>
                    <Col><img src={BAE} class="img-fluid" alt="Clients" /></Col>
                    <Col><img src={ICAEW} class="img-fluid" alt="Clients" /></Col>
                    <Col><img src={Du} class="img-fluid" alt="Clients" /></Col>
                    <Col><img src={TA} class="img-fluid" alt="Clients" /></Col>
                </Row>
            </Container>
        </div>
        </>    
    )  
}

export default Portfolio      