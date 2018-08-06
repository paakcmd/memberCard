bodyParser = require('body-parser');

function makeid(length) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


module.exports = (app, mongoose) => {
  const Merchant = mongoose.model('merchants');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/tomerchant/', (req, res) => {
    new Merchant({
      brand: req.body.brand,
      brandId:makeid(10),
      userId: req.body.userId,
      imageUrl: req.body.imageUrl,

    }).save().then(merchant => res.send(merchant))
  })
}
