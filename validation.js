export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

/* === File: src/middleware/logger.js === */
export const loggerMiddleware = (action, payload) => {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ACTION: ${action} | PAYLOAD: ${JSON.stringify(payload)}`;
  const logs = JSON.parse(sessionStorage.getItem('logs') || '[]');
  logs.push(log);
  sessionStorage.setItem('logs', JSON.stringify(logs));
};
