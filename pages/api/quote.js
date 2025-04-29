// Modern robust quote API using ZenQuotes
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const apiRes = await axios.get('https://zenquotes.io/api/random');
    const data = apiRes.data && apiRes.data[0];
    res.status(200).json({ content: data.q, author: data.a });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
}
