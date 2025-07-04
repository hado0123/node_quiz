const express = require('express')
const app = express()

// JSON 요청 본문 처리를 위한 body-parser 미들웨어 설정
app.use(__)
app.use(__)

app.post('/data', (req, res) => {
   res.send(`Received data: ${JSON.stringify(req.body)}`)
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
