import React from 'react';
import {Col,Row,Container,Input} from 'reactstrap';
import './Main.css';

  const Facebook = (props) => {
  
    return (
      <div className='bg-book'>
      <Container>
        <Row>
          <Col md='3'>
          <img style={{width:"150px",height:"100px"}} alt='logo' src={require('./fb.png')} />
          </Col>
          <Col md={{size:2, offset:3}} className='mt-5'>
            <small className='text-white'>Email atau Telepon</small><br/>
            <Input type='text' bsSize="sm" className='input-facebook' />
          </Col>
          <Col md='2' className='mt-3'>
            <small className='text-white'>Kata Sandi</small><br/>
            <Input type='text' bsSize="sm" className='input-facebook' />
            <a style={{fontSize:"10px"}} href='https://id-id.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar' className='mt-0 text-white'>Lupa akun?</a>
          </Col>
          <Col>
            <button className="btn btn-primary btn-sm mt-3 blue-color btn-facebook">Login</button>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
  
  export default Facebook;