const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.json({ message: 'Hola, DevOps!' });
});
app.get('/health', (req, res) => {
res.json({ status: 'OK', timestamp: new Date() });
});
app.get('/version', (req, res) => {
res.json({ version: '1.0.0' });
});
app.get('/new_version', (req, res) => {
res.json({ new_version: '1.0.1' });
});
module.exports = app;
if (require.main === module) {
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
}

