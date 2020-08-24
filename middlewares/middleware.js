import dataBase from './database';

const middleware = handler => async (req, res) => {
  const {connection, models} = await dataBase();
  try {
    await handler(req, res, connection, models);
  } catch (e) {
    connection.close();
    res.status(500).json({ error: e.message || "something went wrong" });
  }
}

export default middleware
