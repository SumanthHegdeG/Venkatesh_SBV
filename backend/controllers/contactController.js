import asyncHandler from 'express-async-handler'

import Contact from '../models/contactModel.js'

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body

  const contact = await Contact.create({
    name,
    email,
    phone,
    message,
  })

  if (contact) {
    res.status(201).json({ message: 'message sent successfully' })
  } else {
    res.status(400)
    throw new Error('Invalid Contact data')
  }
})

// @desc    Get all contacts
// @route   GET /api/users
// @access  Private/Admin
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({})
  res.json(contacts)
})

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Private/Admin
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)

  if (contact) {
    await contact.remove()
    res.json({ message: 'Contact removed' })
  } else {
    res.status(404)
    throw new Error('Contact not found')
  }
})
export { createContact, getContact, deleteContact }
