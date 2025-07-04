const express = require('express')
const path = require('path')
const app = express()

// 정적 파일 제공
// '/' 경로 생략가능
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
