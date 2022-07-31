import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Row>
          <Col className='m-3' md={6} sm={12}>
            <h4 className='text-white'>SBV INFOTECH</h4>
            <p>Phone:9448276944/8073916173</p>
            <p> SBVINFOTEK@GMAIL.com</p>
            <h5 style={{ color: 'white' }}>GSTIN-29AFCPV7553A1ZA</h5>
          </Col>
          <Col className='m-3'>
            <h5 style={{ color: 'white' }}>Address :</h5>
            <p>Chitpavana suvarna bhavana #507,</p>
            <p> 65th cross, 5th block,</p>
            <p>rajajinagar,</p>
            <p> bengaluru-560010</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; SBV Infotech</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
