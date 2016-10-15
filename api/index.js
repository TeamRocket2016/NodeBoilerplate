'use strict';

import express from 'express';
import compression from 'compression';

const PORT = process.env.PORT || 8080;

const app = express();
// Use gzip compression (best practice)
app.use(compression());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
