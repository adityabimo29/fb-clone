import React from 'react';
import {Col,Row, Container} from 'reactstrap';
import './Main.css';

const Foot = () => {
  
    return (
        <Container>
            <footer className='mt-3'>
                <Row>
                    <Col md='12'>
                        <a className='mr-2 tiny' href='https://facebook.com'>Bahasa Indonesia</a>
                        <a className='mr-2 tiny' href='https://facebook.com'>English (UK)</a>
                        <a className='mr-2 tiny' href='https://facebook.com'>Basa Jawa</a>
                        <a className='mr-2 tiny' href='https://facebook.com'>Bahasa Melayu</a>
                        <hr/>
                    </Col>
                    <Col md='12'>
                        <a className='mr-2 tiny' href='https://facebook.com'>Daftar</a>
                        <a className='mr-2 tiny' href='https://facebook.com'>Messenger</a>
                        <a className='mr-2 tiny' href='https://facebook.com'>Facebook Lite</a>
                        <a className='mr-2 tiny' href='https://facebook.com'>Watch</a>
                        
                    </Col>
                </Row>
            </footer>
        </Container>
    );
  }
  
  export default Foot;