import express from 'express'
import { createProduct, deleteItem,updateItem,getMyItems } from '../controller/itemController.js';

const router = express.Router()

router.post('/product', createProduct)
router.delete('/delete/:id', deleteItem)
router.put('/update/:id', updateItem)
router.get('/getproduct/:id',getMyItems)

export default router