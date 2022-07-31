import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
                9448276944/8073916173
              </p>
              <p>
                <strong>
                  E-mail <MdEmail style={{ fontSize: '24px' }} /> :{' '}
                </strong>{' '}
                SBVINFOTEK@GMAIL.com
              </p>
            </div>
            <h5 style={{ color: 'white' }}>GSTIN-29AFCPV7553A1ZA</h5>
          </Col>
          <Col className='m-3'>
            <h5 style={{ color: 'white' }}>Address :</h5>
            <div className='ml-3'>
              <p>Chitpavana suvarna bhavana #507,</p>
              <p> 65th cross, 5th block,</p>
              <p>rajajinagar,</p>
              <p> bengaluru-560010</p>
            </div>
          </Col>
        </Row>
        <hr style={{ backgroundColor: 'grey' }} />
        <Row>
          <Col className='text-center py-3'>Copyright &copy; SBV Infotech</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
