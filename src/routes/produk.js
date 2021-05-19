const express = require('express')
const router = express.Router()
const produkController = require('../controllers/produk')

// router.use('/produk', produkController.CreateProduk )
router.route('/produk')
.get(produkController.CreateProduk)

module.exports=router