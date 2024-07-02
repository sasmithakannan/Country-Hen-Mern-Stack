import express from 'express';
import { adminLogin, adminSignup, registerAdmin, addProduct } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', adminLogin);
router.post('/signup', adminSignup);
router.post('/register', registerAdmin);
router.post('/addproduct', protect, admin, addProduct);

export default router;
