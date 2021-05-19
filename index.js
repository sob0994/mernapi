const express = require('express')
const app = express()

const produkRoutes = require('./src/routes/produk')

app.use('/v1/', produkRoutes);

app.listen(4000, () => {
    console.log(`Server started on port`);
});