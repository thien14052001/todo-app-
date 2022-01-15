import client from'../../lib/connect.js'

async function handler(req, res) {
    await client
      .query('SELECT * FROM todos')
      .then(value => res.json(value.rows))
      .catch(e => console.error(e.stack))
  }
  export default handler
