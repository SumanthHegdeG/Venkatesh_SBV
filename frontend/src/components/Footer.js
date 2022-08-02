import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { MdContactPhone, MdEmail } from 'react-icons/md'
const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Row className='flex-md-row flex-column'>
          <Col className='m-3 '>
            <h4 className='text-white'>SBV INFOTECH</h4>
            <div className='ml-3'>
              <p>
                <strong>
                  Phone <MdContactPhone style={{ fontSize: '24px' }} /> :{' '}
                </strong>
                <a href={`tel:9448276944`} style={{ color: 'white' }}>
                  9448276944
                </a>
                /
                <a href={`tel:8073916173`} style={{ color: 'white' }}>
                  8073916173
                </a>
              </p>
              <p>
                <strong>
                  E-mail <MdEmail style={{ fontSize: '24px' }} /> :{' '}
                </strong>{' '}
                <a
                  href={`mailto:sbvinfotek@gmail.com`}
                  style={{ color: 'white' }}
                >
                  sbvinfotek@gmail.com
                </a>
              </p>
            </div>
            <h5 style={{ color: 'white' }}>GSTIN-29AFCPV7553A1ZA</h5>
          </Col>
          <Col className='m-3'>
            <h5 style={{ color: 'white' }}>Address :</h5>
            <div className='ml-3' style={{ fontWeight: 'bolder' }}>
              <p>Chitpavana suvarna bhavana #507,</p>
              <p> 65th cross, 5th block,</p>
              <p>rajajinagar,</p>
              <p> bengaluru-560010</p>
            </div>
            <a href='https://g.co/kgs/NDs4EM' target='#'>
              <Button>See in Google</Button>
            </a>
          </Col>
        </Row>
        <hr style={{ backgroundColor: 'grey' }} />
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Hegde Bros</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
