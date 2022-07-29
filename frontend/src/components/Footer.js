import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; SBV Infotech</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
