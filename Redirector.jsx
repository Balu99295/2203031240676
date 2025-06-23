import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Redirector() {
  const { shortcode } = useParams();

  useEffect(() => {
    const mappings = JSON.parse(localStorage.getItem('urlMappings') || '{}');
    const record = mappings[shortcode];

    if (record) {
      const clicks = JSON.parse(localStorage.getItem('clicks') || '[]');
      clicks.push({
        shortcode,
        timestamp: new Date().toISOString(),
        source: document.referrer || 'Direct',
        location: 'India',
      });
      localStorage.setItem('clicks', JSON.stringify(clicks));
      window.location.href = record.longUrl;
    } else {
      alert('Invalid or expired shortcode.');
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
}

export default Redirector;