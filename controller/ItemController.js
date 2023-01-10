import { Product } from '../model/ItemModel.js';

export const createProduct = async (req, res) => {
    try {
        let itemData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            userId: req.body.userId,
            images: req.body.myImages
        }
        let newProduct = await Product.create({
            ...itemData,
        })
        res.status(200).json({
            status: true,
            data: newProduct,
        })
    }
    catch (err) {
        res.send(err.message)
    }
}
export const deleteItem = async (req, res) => {
    try {
        
        let remainingItem= await Product.findByIdAndRemove(req.params.id)
        res.status(200).json({
            status: true,
            data: remainingItem,
        })
    }
    catch (err) {
    res.send(err.message)

}
}

export const getMyItems = async (req, res) =>{
    try{

        let myItems = await Product.find({ userId : req.params.id})
        res.status(200).json({
            status: true,
            data: myItems,
        })

    }
    catch(err){
        res.send(err.message)
    }
}

export const updateItem = async (req, res) => {
    try{
       
        let item = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json({
            status: true,
            message: 'Updated successfully',
            data:item
        })
    }
    catch(err){
        res.send(err.message)
    }
}