import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { deleteContact, listContacts } from '../actions/contactActions'

const MessageListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const [showMore, setShowMore] = useState({})

  const contactList = useSelector((state) => state.contactList)
  const { loading, error, contacts } = contactList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const contactDelete = useSelector((state) => state.contactDelete)
  const { success: successDelete } = contactDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listContacts())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, successDelete, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteContact(id))
    }
  }
  return (
    <>
      <h1>Messages</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>MESSAGE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{contact.name}</td>
                <td>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </td>
                <td>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </td>
                <td>
                  <div>{contact.message}</div>
                </td>
                <td>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(contact._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default MessageListScreen
