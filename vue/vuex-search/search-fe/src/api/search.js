import axios from 'axios'

export default {
  doSearch(keyword, cb) {
    // console.log(keyword)
    axios(`/api/search/${keyword}`)
    .then(data => {
      cb(data)
    })
  }
}