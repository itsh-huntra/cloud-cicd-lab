const express = require('express');
 
const app = express();
 
// หน้าแรก: ส่งข้อความและเวอร์ชันของแอป
app.get('/', (req, res) => {
  res.json({
    message: 'Hello GitHub',
    version: process.env.APP_VERSION || 'dev'
  });
});
 
// Health check: ใช้ตรวจว่าแอปยังทำงานอยู่
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
 
module.exports = app;
