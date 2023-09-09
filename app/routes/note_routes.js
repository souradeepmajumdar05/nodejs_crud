var ObjectID = require('mongodb').ObjectId;
module.exports = function (app, db) {
    app.get('/notes/:id', async (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        try {
            const cursor = await db.collection('note').find(details);
            const result = await cursor.toArray();

            if (result.length === 0) {
                res.status(404).send('Note not found');
            } else {
                res.send(result[0]);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });

    app.post('/notes', async (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        try {
            const result = await db.collection("note").insertOne(note);
            res.send(result);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error inserting note");
        }
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('note').deleteOne(details)
            .then((result) => res.send(result))
            .catch((err) => {
                !error.logged && logger.error('Mongo error', err);
                error.logged = true;
                throw err;
            });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = {
            $set: { // Use $set to specify the fields to update
                text: req.body.body,
                title: req.body.title
            }
        };

        db.collection('note').updateOne(details, note)
            .then((result) =>
                res.send(result))
            .catch((err) => {
                throw err;
            });
    });
};