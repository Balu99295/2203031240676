import { TextField } from '@mui/material';

function UrlShortenerForm({ url, idx, handleInputChange }) {
  return (
    <>
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
    </>
  );
}

export default UrlShortenerForm;