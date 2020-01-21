import React from 'react';
import {Col,Row, Label,Input, Container} from 'reactstrap';
import './Main.css';

const Content = () => {
  
    return (
    <div className='bg-ku'> 
      <Container >
      <Row className='mt-3'>
          <Col md='5'>
            <h4 className='mb-4'>Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</h4>
            <img alt='people' src='https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png' />
          </Col>
          <Col md={{size:6,offset:1}}>
            <h3>Daftar</h3>
            <p>Ini cepat dan mudah.</p>
            <Row>
                <Col md='6'>
                    <input className='form-control' placeholder='Nama Depan' />
                </Col>
                <Col md='6'>
                    <input className='form-control' placeholder='Nama Belakang' />
                </Col>
            </Row>
                <input className='form-control my-2' placeholder='Nomor Seluler atau email' />
                <input type='password' className='form-control my-2' placeholder='Kata Sandi Baru' />
            <Row>
                <Col md='12'>
                    <Label for="exampleSelect">Tanggal Lahir</Label>
                </Col>
                <Col md='3'>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                </Col>
                <Col md='3'>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>Mei</option>
                    </Input>
                </Col>
                <Col md='3'>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    </Input>
                </Col>
            </Row>
            <Row>
            <Col md='12' className='pt-3'>
                    <Label for="exampleSelect">Jenis Kelamin</Label>
                </Col>
                <Col md='3'>
                    <input type='radio' name='gender' value='Perempuan' /> Perempuan
                </Col>
                <Col md='3'>
                    <input type='radio' name='gender' value='Laki-laki' /> Laki-laki
                </Col>
                <Col md='3'>
                    <input type='radio' name='gender' value='Khusus' /> Khusus
                </Col>
            </Row>
            <Row>
                <Col md='10'>
                <small className='pt-2' style={{fontSize:"10px"}}>Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Data dan Kebijakan Cookie kami. Anda akan menerima Notifikasi SMS dari Facebook dan dapat menolaknya kapan saja.</small>
                </Col>
            </Row>
            <Row className='pt-2'>
                <Col md='4'>
                    <button className="btn btn-success btn-block">Daftar</button>
                </Col>
            </Row>
            <Row className='pt-2'>
                <Col md='12'>
                    <p className='tebal'> <a href='https://id-id.facebook.com/pages/creation/?ref_type=registration_form'>Buat Halaman</a> untuk selebriti, grup musik, atau bisnis.</p>
                </Col>
            </Row>
          </Col>
      </Row>
      </Container>
      </div>
    );
  }
  
  export default Content;