/**
 * @version 3.0.0
 * @author Mike Peiman
 * @license MIT
 * 
 */

class easyHTTP {
  // Make HTTP GET request
  async get(url) {
    const response = await fetch(url)
    const resData = await response.json()
    return resData
  }

  // Make an HTTP POST request
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })

    // const resData = await response.json()
    // return resData
    return await response.json()
  }

  //   post(url, data) {
  //     return new Promise((resolve, reject) => {
  //       fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err))
  //   })
  // }

  // Make an HTTP PUT request
  async put(url, data) {

    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })

    return await response.json()
  }

  // put(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err))
  //   })
  // }

  // Make an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })

    return await 'Resource deleted'
  }


  // delete(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'DELETE',
  //       headers: { 'Content-type': 'application/json' },
  //     })
  //     .then(res => res.json())
  //     .then(data => resolve('Resource deleted!'))
  //     .catch(err => reject(err))
  //   })
  // }
}

/*
// The boilerplate to post with promises
post(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: ,
      headers: {},
      body:
    })
    .then()
    .then()
    .catch()
  })
}
*/

export const http = new easyHTTP()
// export default { http }