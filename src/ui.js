class UI {
  constructor() {
    this.post = document.querySelector('#posts')
    this.titleInput = document.querySelector('#title')
    this.messageInput = document.querySelector('#message-body')
    this.idInput = document.querySelector('#id')
    this.postSubmit = document.querySelector('.post-submit')
    this.forState = 'add'
  }

  showPosts(posts) {
    let output = ''

    posts.forEach((post) => {
      output += `
      <div class="card m-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
      `
    })

    this.post.innerHTML = output
  }
}

export const ui = new UI()