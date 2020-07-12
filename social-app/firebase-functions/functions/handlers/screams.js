// const { db } = require('../util/admin');

exports.getScreams = functions.https.onRequest(async (request, response) => {
  const result = await db
    .collection('screams')
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push(doc.data());
      });
      return screams;
    });
  response.json(result);
});

exports.createScream = functions.https.onRequest((req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString(),
  };

  admin.db
    .collection('screams')
    .add(newScream)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Something went wrong' });
      console.log(err);
    });
});
