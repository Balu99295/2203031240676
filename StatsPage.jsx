import { Container, Typography, Card } from '@mui/material';

function StatsPage() {
  const mappings = JSON.parse(localStorage.getItem('urlMappings') || '{}');
  const clicks = JSON.parse(localStorage.getItem('clicks') || '[]');

  return (
    <Container>
      <Typography variant="h4">URL Statistics</Typography>
      {Object.entries(mappings).map(([code, data]) => {
        const linkClicks = clicks.filter(c => c.shortcode === code);
        return (
          <Card key={code} style={{ padding: 16, marginBottom: 16 }}>
            <Typography><strong>Short URL:</strong> http://localhost:3000/{code}</Typography>
            <Typography><strong>Long URL:</strong> {data.longUrl}</Typography>
            <Typography><strong>Created:</strong> {data.createdAt}</Typography>
            <Typography><strong>Expires:</strong> {data.expiresAt}</Typography>
            <Typography><strong>Total Clicks:</strong> {linkClicks.length}</Typography>
            {linkClicks.map((click, idx) => (
              <Typography key={idx}>Click at {click.timestamp} from {click.source} ({click.location})</Typography>
            ))}
          </Card>
        );
      })}
    </Container>
  );
}

export default StatsPage;