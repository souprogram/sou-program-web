const env = require('../environment')

function validate() {
  return function (req, res, next) {
    try {
      const { table_view_access_key = '' } = req.query;

      if (table_view_access_key !== env.tableViewAccessKey) {
        throw Error('Table view access key is not valid');
      }

      next();
    } catch (error) {
      return res.status(400).send({
        error: error.message,
      });
    }
  };
}

module.exports = { validate };
