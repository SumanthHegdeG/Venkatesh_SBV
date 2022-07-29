import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Image } from 'react-bootstrap'
import Rating from './Rating'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'

const Product = ({ product, view }) => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const item = cartItems.find((item) => item.product === product._id)
  const quantity = item ? item.qty : 0

  const dispatch = useDispatch()
  if (view) {
    return (
      <Col key={product._id} sm={12} md={6} lg={4} xl={3} className='py-3'>
        <div
          className=' p-3 rounded shadow h-100 d-flex'
          style={{ flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div style={{ minHeight: '150px' }}>
            <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} fluid />
            </Link>
          </div>
          <hr className='w-100' />
          <div>
            <Link to={`/product/${product._id}`}>
              <div>
                <strong>{product.name}</strong>

                <p style={{ maxHeight: '40px', overflowY: 'hidden' }}>
                  {product.description}
                </p>
              </div>
            </Link>
            <div>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
            <h3>Rs {product.price}</h3>
            <div className='d-flex justify-content-center py-3'>
              {quantity ? (
                <div
                  className='border d-flex align-items-center'
                  style={{ columnGap: '0.5rem' }}
                >
                  <Button
                    className='rounded-0'
                    variant='light'
                    onClick={() => {
                      if (quantity > 1)
                        dispatch(addToCart(product._id, quantity - 1))
                      else dispatch(removeFromCart(product._id))
                    }}
                  >
                    -
                  </Button>
                  <span>{quantity}</span>
                  <Button
                    className='rounded-0'
                    variant='light'
                    onClick={() => {
                      dispatch(addToCart(product._id, quantity + 1))
                    }}
                    disabled={!(product.countInStock - quantity)}
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button
                  variant='info'
                  onClick={() => {
                    dispatch(addToCart(product._id, quantity + 1))
                  }}
                  disabled={!product.countInStock}
                >
                  {product.countInStock ? ' Add to Cart' : 'Out of Stock'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Col>
    )
  } else
    return (
      <div
        className=' p-3 rounded shadow d-flex w-100 my-4 col-md-10 justify-content-between'
        style={{ columnGap: '0.5rem', minHeight: '200px' }}
      >
        <div className='col-4'>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
          </Link>
        </div>

        <div
          className='d-flex col-7'
          style={{
            justifyContent: 'space-between',
            columnGap: '0.5rem',
          }}
        >
          <div
            className='d-flex'
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Link to={`/product/${product._id}`}>
              <div>
                <strong>{product.name}</strong>
                <p style={{ maxHeight: '40px', overflowY: 'hidden' }}>
                  {product.description}>
                </p>
              </div>
            </Link>
            <div>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
            <h3>Rs {product.price}</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {quantity ? (
              <div
                className='border d-flex align-items-center'
                style={{ columnGap: '0.5rem' }}
              >
                <Button
                  className='rounded-0'
                  variant='light'
                  onClick={() => {
                    if (quantity > 1)
                      dispatch(addToCart(product._id, quantity - 1))
                    else dispatch(removeFromCart(product._id))
                  }}
                >
                  -
                </Button>
                <span>{quantity}</span>
                <Button
                  className='rounded-0'
                  variant='light'
                  onClick={() => {
                    dispatch(addToCart(product._id, quantity + 1))
                  }}
                  disabled={!(product.countInStock - quantity)}
                >
                  +
                </Button>
              </div>
            ) : (
              <Button
                variant='info'
                onClick={() => {
                  dispatch(addToCart(product._id, quantity + 1))
                }}
                disabled={!product.countInStock}
              >
                {product.countInStock ? ' Add to Cart' : 'Out of Stock'}
              </Button>
            )}
          </div>
        </div>
      </div>
    )
}

export default Product
