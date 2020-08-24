  
import middleware from '../../middlewares/middleware';
import apiHandler from '../../middlewares/handler';

export default middleware(async (req, res, connection, models) => {
  const {
    method
  } = req

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  apiHandler(res, method, {
    GET: (response) => {
      models.Product.find({}, (error, products) => {
        if (error) {
          connection.close();
          response.status(500).json({ error });
        } else {
          response.status(200).json(products.map(data => {data.name = data.category; return data }));
          connection.close();
        }
      })
    }
  });
})
