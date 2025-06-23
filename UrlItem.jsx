import { Card, Typography } from '@mui/material';

function UrlItem({ code, longUrl, expiresAt }) {
  return (
    <Card style={{ padding: 16, marginTop: 16 }}>
      <Typography><strong>Short:</strong> http://localhost:3000/{code}</Typography>
      <Typography><strong>Original:</strong> {longUrl}</Typography>
      <Typography><strong>Expires:</strong> {expiresAt}</Typography>
    </Card>
  );
}

export default UrlItem;