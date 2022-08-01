import express from 'express'
import {
  createContact,
  deleteContact,
  getContact,
} from '../controllers/contactController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(createContact).get(protect, admin, getContact)
router.route('/:id').delete(protect, admin, deleteContact)
export default router
