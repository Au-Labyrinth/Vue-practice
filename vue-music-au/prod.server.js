var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var app = express()
var port = process.env.PORT || config.build.port

var apiRoutes = express.Router()

app.get('/api/getDiscList', (req, res) => {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      host: 'c.y.qq.com',
      referer: 'htpps://c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    console.log(err)
  })
})

app.get('/api/lyric', (req, res) => {
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  axios.get(url, {
    headers: {
      host: 'c.y.qq.com',
      referer: 'htpps://c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    let ret = response.data
    if (typeof ret === 'string') {
      const reg = /^\w+\(({[^()]+})\)$/
      const matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((err) => {
    console.log(err)
  })
})

app.get('/api/getDiscSongList', (req, res) => {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/getTopList', (req, res) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://m.y.qq.com',
      origin: 'https://m.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/getDetailTopList', (req, res) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'c.y.qq.com',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/getHotKey', (req, res) => {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://m.y.qq.com/',
      origin: 'https://m.y.qq.com/'
    },
    params: req.query
  }).then( (response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/search', (req, res) => {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  axios.get(url, {
    headers: {
      referer: 'https://m.y.qq.com/',
      origin: 'https://m.y.qq.com/'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
