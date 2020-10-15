const express = require('express');
const app = express();
const PORT = 3000

app.get('/', (req, res) => {
        res.send('hello pussy');
    })

app.listen(PORT, () => console.log(`Server is runing on PORT:${PORT}`))

