exports.findAllAdverts = function(req, res) {
    res.send(
      [
        {
          title: 'advert 1',
          description: '',
          domain: '',
          url: ''
        },
        {
          title: 'advert 2',
          description: '',
          domain: '',
          url: ''
        },
        {
          title: 'advert 3',
          description: '',
          domain: '',
          url: ''
        }
      ]
    );
};