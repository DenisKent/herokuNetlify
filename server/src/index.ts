import express from 'express';
// rest of the code remains same
const app = express();
const PORT = process.env.PORT || 8000;
app.get('*', (req, res) => res.send(`Express + TypeScript Server 3, ${req.url}`));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});