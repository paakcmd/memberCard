bodyParser = require('body-parser');
function makeid(length) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

module.exports = (app, mongoose, io) => {
  const Transcation = mongoose.model('transcations');
  const User = mongoose.model('users');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/make/transaction', (req, res) => {
    new Transcation({
      userId: req.body.userId,
      brandId: req.body.brandId,
      ref: req.body.ref,
      points: req.body.points,
      transactionRef: makeid(10)
    })
      .save()
      .then(transaction => {
        io.emit('transaction', { data: 'update' });
        res.send(transaction);
      });
  });

  app.get('/api/get/transaction/', (req, res) => {
    User.findById(req.user).then(user => {
      Transcation.find({
        ref: user.ref
      })
        .populate('brandId', 'brand')
        .select('points _id time brand')
        .then(result => res.send(result));
    });
  });
};
