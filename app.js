const express = require('express');
// Memanggil route module agar dapat digunakan di /api
const goodsRouter = require('./routes/goods')
// Open koneksi schema
const connect = require('./schemas')
connect()
// Menjalankan express di port 3000
const app = express();
const port = 3000;
// Passing router ke json dengan express
app.use(express.json());
app.use('/api', [goodsRouter])

// Listen response
app.listen(port, () => {
    console.log(port, 'Server is open with port')
})