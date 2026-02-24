// Current Date and Time (UTC)
const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

console.log('Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS):', currentDateTime);