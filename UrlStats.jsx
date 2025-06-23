import { Card, Typography } from '@mui/material';

function UrlStats({ code, data, clicks }) {
  return (
    <Card style={{ padding: 16, marginBottom: 16 }}>
      <Typography><strong>Short URL:</strong> http://localhost:3000/{code}</Typography>
      <Typography><strong>Long URL:</strong> {data.longUrl}</Typography>
      <Typography><strong>Created:</strong> {data.createdAt}</Typography>
      <Typography><strong>Expires:</strong> {data.expiresAt}</Typography>
      <Typography><strong>Total Clicks:</strong> {clicks.length}</Typography>
      {clicks.map((click, idx) => (
        <Typography key={idx}>Click at {click.timestamp} from {click.source} ({click.location})</Typography>
      ))}
    </Card>
  );
}

export default UrlStats;