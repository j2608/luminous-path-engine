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
      message: 'Welcome to Luminous Path Engine!',
      data: [
        { id: 1, name: 'Component A', type: 'feature', status: 'active' },
        { id: 2, name: 'Component B', type: 'utility', status: 'active' },
        { id: 3, name: 'Component C', type: 'widget', status: 'active' },
        { id: 4, name: 'Authentication System', type: 'security', status: 'ready' },
        { id: 5, name: 'Dashboard Analytics', type: 'analytics', status: 'ready' }
      ],
      timestamp: new Date().toISOString(),
      server: 'Vercel Serverless Functions'
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}