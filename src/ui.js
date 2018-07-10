class UI {
  constructor() {
    this.post = document.querySelector('#posts')
    this.titleInput = document.querySelector('#title')
    this.bodyInput = document.querySelector('#message-body')
    this.idInput = document.querySelector('#hidden-id')
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
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `
    })

    this.post.innerHTML = output
  }

  showAlert(message, className) {
    this.clearAlert()

    // create div
    const div = document.createElement('div')
    div.className = className
    // add text
    div.appendChild(document.createTextNode(message))
    // get parent, in order to insert into DOM
    const container = document.querySelector('.postsContainer')
    // get posts div
    const posts = document.querySelector('#posts')
    // insert alert div
    container.insertBefore(div, posts)

    // set timeout
    setTimeout(() => {
      this.clearAlert()
    }, 3000);
  }

  // remove alert after timeout
  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if(currentAlert) {
      currentAlert.remove()
    }
  }

  // clear input fields after submission
  clearFields() {
    this.titleInput.value = ''
    this.bodyInput.value = ''
  }

  // fill form with existing post content to edit
  fillForm(data) {
    this.idInput.value = data.id
    this.titleInput.value = data.title
    this.bodyInput.value = data.body
    
    this.changeFormState('edit')
  }

  // clear id hidden value
  clearIdInput() {
    this.idInput.value = ''
  }

  // change the form state
  changeFormState(state) {
    if(state === 'edit') {
      this.postSubmit.textContent = 'Update Post'
      this.postSubmit.className = 'post-submit btn btn-warning btn-block'

      // create cancel button
      const button = document.createElement('button')
      button.className = 'post-cancel btn btn-block btn-dark'
      button.appendChild(document.createTextNode('Cancel Edit'))
      // get parent
      const parent = document.querySelector('.card-form')
      // get element to insert before - the 'span-end' span
      const formEnd = document.querySelector('.form-end')
      // insert new button
      parent.insertBefore(button, formEnd)

    } else {
      this.postSubmit.textContent = 'Post It'
      this.postSubmit.className = 'post-submit btn btn-primary btn-block'
      // remove cancel button if present
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove()
      }
      // clear ID from hidden field
      this.clearIdInput()
      // clear content from input fields
      this.clearFields()
    }
  }
}

export const ui = new UI()