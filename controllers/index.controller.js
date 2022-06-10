module.exports = {
  index: async (req, res) => {
    const name = 'Aras';
    return res.render('index', { name });
  },
};
