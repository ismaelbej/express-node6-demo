import express from 'express';

const app = express();

app.get('/', async function (req, res) {
  res.send('Jello');
});

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    if (__DEV__) {
        console.log('****In development****');
    }
    console.log('Listening on port ' + port);
});
