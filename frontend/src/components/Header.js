import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Image, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import img from '../SBV-Logo.png'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: 99,
        backgroundColor: '#ddf3fd',
      }}
    >
      <Navbar
        variant='light'
        expand='lg'
        collapseOnSelect
        className='border-bottom shadow p-1'
      >
        <Container>
          <LinkContainer to='/' className='m-0'>
            <Navbar.Brand>
              <div className='d-flex align-items-center'>
                <div style={{ width: '4rem' }}>
                  <Image src={img} fluid />
                </div>
                <h5 className='m-0  p-0 d-none d-lg-block d-xl-block mr-5'>
                  SBV Infotech
                </h5>
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              className='ml-auto align-items-lg-center'
              style={{ columnGap: '10px' }}
            >
              {(!userInfo || (userInfo && !userInfo.isAdmin)) && (
                <>
                  <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/aboutus'>
                    <Nav.Link>About US</Nav.Link>
                  </LinkContainer>
                </>
              )}
              {userInfo ? (
                <>
                  <NavDropdown
                    title={userInfo.name}
                    id='username'
                    style={{ fontSize: '14px' }}
                    className='m-0'
                  >
                    {userInfo.isAdmin && (
                      <>
                        <LinkContainer to='/admin/userlist'>
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/productlist'>
                          <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/orderlist'>
                          <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/messagelist'>
                          <NavDropdown.Item>Messages</NavDropdown.Item>
                        </LinkContainer>
                      </>
                    )}
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>

                  {!userInfo.isAdmin && (
                    <LinkContainer to='/cart'>
                      <Nav.Link>
                        <div>
                          <i className='fas fa-shopping-cart'></i> Cart
                        </div>
                      </Nav.Link>
                    </LinkContainer>
                  )}
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
