// src/middleware/logger.js
export const loggerMiddleware = (action, payload) => {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ACTION: ${action} | PAYLOAD: ${JSON.stringify(payload)}`;
  
  // DO NOT USE console.log — instead, save to local/sessionStorage
  const logs = JSON.parse(sessionStorage.getItem("logs") || "[]");
  logs.push(log);
  sessionStorage.setItem("logs", JSON.stringify(logs));
};
