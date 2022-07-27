import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, FormCheck } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'

import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { useState } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const HomeScreen = ({ match }) => {
  const [verticalView, setVerticalView] = useState(true)
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  if (windowDimensions.width < 768 && !verticalView) {
    setVerticalView(true)
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  if (userInfo && userInfo.isAdmin) {
    return <Redirect to='/admin/productlist' />
  }
  return (
    <>
      <Meta />
      {keyword && (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h3 className='mt-5 text-center'>
        <span
          className=' border-danger mr-3 px-3'
          style={{ borderLeft: '4px solid', borderRight: '4px solid' }}
        >
          Latest Products
        </span>
      </h3>
      <div className='d-none d-lg-block d-xl-block'>
        <FormCheck
          type='switch'
          id='custom-switch'
          label='List View'
          onClick={(e) => setVerticalView(!e.target.checked)}
          checked={!verticalView}
        />
      </div>
      <hr />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div
            className={`d-flex flex-wrap ${
              !verticalView ? 'align-items-center' : 'justify-content-center'
            }`}
            style={{ flexDirection: verticalView ? 'row' : 'column' }}
          >
            {products.map((product) => (
              <Product product={product} view={verticalView} />
            ))}
          </div>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
