bodyParser = require('body-parser');

module.exports = (app, mongoose) => {
  const Merchant = mongoose.model('merchants');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/tomerchant/', (req, res) => {
    new Merchant({
      brand: req.body.brand,
      userId: req.body.userId,
      imageUrl: req.body.imageUrl
    })
      .save()
      .then(merchant => res.send(merchant));
  });

  app.get('/api/get/merchants', (req, res) => {
    const User = mongoose.model('users');
    User.findById(req.user).then(user => {
      const Transcation = mongoose.model('transcations');
      Transcation.aggregate([
        {
          $match: { ref: user.ref }
        },
        {
          $group: { _id: '$brandId', sumPoints: { $sum: '$points' } }
        },
        {
          $lookup: {
            from: 'merchants',
            localField: 'merchantId',
            foreignField: 'id',
            as: 'brand'
          }
        },
        {
          $project: {
            sumPoints: 1,
            'brand.imageUrl': 1,
            'brand.brand': 1,
            'brand._id': 1
          }
        }
      ])
        .then(result => {
          var finalResult = [];
          result.forEach(each => {
            var obj = {};
            obj.sumPoints = each.sumPoints;
            for (var i = 0; i < each.brand.length; i++) {
              if (each.brand[i]._id == each._id) {
                obj.imageUrl = each.brand[i].imageUrl;
                obj.brand = each.brand[i].brand;
                obj.id = each.brand[i]._id;
                finalResult.push(obj);
              }
            }
          });
          
          res.send(finalResult);
        })
        .catch(err => res.send(err));
    });
  });
};
