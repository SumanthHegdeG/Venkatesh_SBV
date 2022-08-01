import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createContact } from '../actions/contactActions'
import Loader from './Loader'
import Message from './Message'

const ContactForm = ({ openContact, SetOpenContact }) => {
  const { loading, error, message } = useSelector(
    (state) => state.contactCreate
  )

  const dispatch = useDispatch()
  const [validate, setValidate] = useState({
    values: {},
    errors: {},
  })

  const checkError = (name, state) => {
    var errors = {}

    if (!state.values.email) {
      errors.email = 'Reqired'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.values.email)
    ) {
      errors.email = 'Invalid email'
    }
    if (!state.values.name) {
      errors.name = 'Required'
    }
    if (!state.values.phone) {
      errors.phone = 'Required'
    } else if (!/^[0-9]*$/.test(state.values.phone)) {
      errors.phone = 'invalid Phone no'
    }
    if (!state.values.message) {
      errors.message = 'Required'
    }

    if (name) return errors[name]

    return errors
  }

  const handleClose = () => {
    SetOpenContact(false)
  }
  const handleChange = (e) => {
    e.persist()
    var error = undefined

    setValidate((state) => {
      const newState = {
        ...state,
        values: {
          ...state.values,
          [e.target.name]: e.target.value,
        },
      }

      error = checkError(e.target.name, newState)
      return { ...newState }
    })

    setValidate((state) => {
      return {
        ...state,
        errors: {
          ...state.errors,
          [e.target.name]: error,
        },
      }
    })
  }

  const submit = (e) => {
    e.preventDefault()
    const errors = checkError(null, validate)

    if (Object.keys(errors).length)
      setValidate((state) => ({ ...state, errors: { ...errors } }))
    else {
      dispatch(createContact(validate.values))
    }
  }
  return (
    <Modal show={openContact} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : message ? (
          <Message variant='success'>{message}</Message>
        ) : (
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                className={validate.errors.name && ' is-invalid'}
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleChange}
                placeholder={'Enter Name ...'}
                value={validate.values.name || ''}
              />
              {validate.errors.name && (
                <div className='invalid-feedback'>{validate.errors.name}</div>
              )}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={validate.errors.email && ' is-invalid'}
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleChange}
                placeholder={'Enter Email ...'}
                value={validate.values.email || ''}
              />
              {validate.errors.email && (
                <div className='invalid-feedback'>{validate.errors.email}</div>
              )}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className={validate.errors.phone && ' is-invalid'}
                type='tel'
                name='phone'
                onChange={handleChange}
                onBlur={handleChange}
                placeholder={'Enter Phone Number ...'}
                value={validate.values.phone || ''}
              />
              {validate.errors.phone && (
                <div className='invalid-feedback'>{validate.errors.phone}</div>
              )}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Enter Message</Form.Label>
              <Form.Control
                className={validate.errors.message && ' is-invalid'}
                as='textarea'
                rows={4}
                name='message'
                onChange={handleChange}
                onBlur={handleChange}
                placeholder={'Enter Message ...'}
                value={validate.values.message || ''}
              />
              {validate.errors.message && (
                <div className='invalid-feedback'>
                  {validate.errors.message}
                </div>
              )}
            </Form.Group>
            <div>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button type='submit' className=' bg-info ml-3' onClick={submit}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default ContactForm
