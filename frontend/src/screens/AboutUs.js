import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import img from '../images/homeImg.png'
import img1 from '../images/aboutUsImg.jpg'
const AboutUs = () => {
  return (
    <>
      <section id='home'>
        <Row className='justify-content-center align-items-center'>
          <Col lg={{ order: 'last' }} md={6} sm={7} xs={9}>
            <Image src={img} fluid />
          </Col>
          <Col md={12} lg={6}>
            <h5>Hello there, We are</h5>
            <h1>SBV Infotech</h1>

            <p
              className='m-0'
              style={{ fontWeight: 'normal', fontSize: '18px' }}
            >
              A professional group in the field of computer hardware and
              software maintenance. We qualify ourselves with more than 14 years
              of experience in the servicing of computer desktops, laptops,
              printers, scanners and all other accessories.
            </p>

            <div className='mt-3 d-flex gap-4 buttons'>
              <a href='#contact'>
                <Button size='lg' className='mt-3 p-3 bg-info'>
                  Contact Me
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </section>
      <section id='aboutUs' className='my-5'>
        <Row className='justify-content-between align-items-center'>
          <Col md={6} sm={7} xs={9} lg={5}>
            <Image src={img1} fluid />
          </Col>
          <Col md={12} lg={6}>
            <h1 className='heading mb-3'>About</h1>
            <p
              className='m-0 mb-3'
              style={{ fontWeight: 'normal', fontSize: '18px' }}
            >
              We are located in the heart of the city at Rajajinagar. We have
              the entire basic infrastructure required to carry out servicing
              and to take up annual maintenance contracts. Ever increasing list
              of customers in the industry is testimony to our commitment to
              provide quality service and support. All our engineers have varied
              field experience and have developed the expertise in understanding
              your problem.(at actual site conditions).
            </p>
            <p style={{ fontWeight: 'normal', fontSize: '18px' }}>
              {` Our service engineers are always on the move throughout the city.
              We are never far from you whenever you call us.`}
            </p>
          </Col>
        </Row>
      </section>
      <section id='selling'>
        <Row className='justify-content-center align-items-center'>
          <Col lg={{ order: 'last' }} md={6} sm={7} xs={9}>
            <Image src={img} fluid />
          </Col>
          <Col md={12} lg={6}>
            <h1 className='heading mb-3'>Our Products</h1>
            <ul>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                All Kind of Computer hardware Products [including PC Assembling]
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Networking products and solutions.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                High End Servers, Work stations and LAN Stations.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Computer PC and Laptops on Rentals basis.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                All kind of software's and security solutions and Software
                distribution.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                REFURBISHED IMPORT LAPTOPS AND DESKTOPS SALES.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Close Circuit Television (CC TV).
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Computers and Hardware buyback,Upgradation
              </li>
            </ul>
          </Col>
        </Row>
      </section>
      <section id='services' className='my-5'>
        <Row className='justify-content-between align-items-center'>
          <Col md={6} sm={7} xs={9} lg={5}>
            <Image src={img1} fluid />
          </Col>
          <Col md={12} lg={6}>
            <h1 className='heading mb-3'>We Provide</h1>
            <ul>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Contract based regular maintenance of Computers/Laptops,
                Printers, Networks, Workstations, and all other related
                Hardware.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                High End Server Maintenance.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Maintenance and Services for all products with high experienced
                Engineers at your doorstep.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Wired and Wireless network services.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Installation/Configuration of all kinds of software and security
                solutions.
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Close circuit television (CCTV) installation and maintenance
              </li>
              <li style={{ fontWeight: 'normal', fontSize: '18px' }}>
                Home networking, switches and hubs, storage area networks (SAN),
                print servers and network software, modems, UNIX-server
                connectivity, output management and document delivery
              </li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default AboutUs
