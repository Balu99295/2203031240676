// src/pages/ShortenerPage.jsx
import { useState } from 'react';
import { Container, TextField, Button, Typography, Card } from '@mui/material';
import { isValidURL } from '../utils/validation';
import { nanoid } from 'nanoid';
import { loggerMiddleware } from '../middleware/logger';

function ShortenerPage() {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleInputChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleAdd = () => {
    if (urls.length < 5) setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
  };

  const handleShorten = () => {
    const mappings = JSON.parse(localStorage.getItem('urlMappings') || '{}');
    const updatedResults = [];

    urls.forEach(({ longUrl, validity, shortcode }) => {
      if (!isValidURL(longUrl)) return alert('Invalid URL format');
      let code = shortcode || nanoid(6);
      if (mappings[code]) return alert('Shortcode already exists');

      const now = new Date();
      const validMinutes = validity ? parseInt(validity) : 30;
      const expiresAt = new Date(now.getTime() + validMinutes * 60000);

      mappings[code] = {
        longUrl,
        createdAt: now.toISOString(),
        expiresAt: expiresAt.toISOString(),
      };

      loggerMiddleware('CREATE_SHORT_URL', { code, longUrl });

      updatedResults.push({ code, longUrl, expiresAt });
    });

    localStorage.setItem('urlMappings', JSON.stringify(mappings));
    setResults(updatedResults);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      {urls.map((url, idx) => (
        <Card key={idx} style={{ padding: 16, marginBottom: 16 }}>
          <TextField
            fullWidth
            label="Long URL"
            value={url.longUrl}
            onChange={(e) => handleInputChange(idx, 'longUrl', e.target.value)}
            margin="normal"
          />
          <TextField
            label="Validity (min)"
            type="number"
            value={url.validity}
            onChange={(e) => handleInputChange(idx, 'validity', e.target.value)}
            margin="normal"
          />
          <TextField
            label="Custom Shortcode"
            value={url.shortcode}
            onChange={(e) => handleInputChange(idx, 'shortcode', e.target.value)}
            margin="normal"
          />
        </Card>
      ))}
      <Button onClick={handleAdd} variant="outlined">Add URL</Button>
      <Button onClick={handleShorten} variant="contained" color="primary" style={{ marginLeft: 8 }}>
        Shorten URLs
      </Button>

      {results.map(({ code, longUrl, expiresAt }) => (
        <Card key={code} style={{ padding: 16, marginTop: 16 }}>
          <Typography><strong>Short:</strong> http://localhost:3000/{code}</Typography>
          <Typography><strong>Original:</strong> {longUrl}</Typography>
          <Typography><strong>Expires:</strong> {expiresAt.toString()}</Typography>
        </Card>
      ))}
    </Container>
  );
}

export default ShortenerPage;
