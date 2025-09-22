export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({ 
      version: '1.0.0',
      name: 'Luminous Path Engine',
      description: 'A modern web application backend',
      platform: 'Vercel',
      runtime: 'Node.js Serverless'
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}