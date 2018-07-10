import {http} from './http'
import {ui } from './ui'

document.addEventListener('DOMContentLoaded', getPosts)

function getPosts() {
  http.get('http://localhost:3000/posts')
  .then((result) => {
    ui.showPosts(result)
  }).catch((err) => {
    console.log(err)
  });
}