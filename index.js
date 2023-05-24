import posts from './posts.js'

const container = document.querySelector('.container')

posts.forEach((post) => {
  const postElement = document.createElement('section')
  postElement.innerHTML = `
      <div class="post-header">
        <div class="avatar-container">
          <img src="${post.avatar}" alt="Avatar Image" class="avatar user-avatar" />
        </div>
        <div>
          <p class="bold-text user-name">${post.name}</p>
          <p class="post-location">${post.location}</p>
        </div>
      </div>
      <img src="${post.post}" alt="Post Image" class="post-image" />
      <div class="post-footer">
        <div class="post-interactions">
          <div class="icons-container">
            <img src="images/icon-heart.png" alt="Like Icon" class="icons" />
            <img src="images/icon-comment.png" alt="Comment Icon" class="icons" />
            <img src="images/icon-dm.png" alt="DM Icon" class="icons" />
          </div>
          <p class="bold-text post-likes">${post.likes} likes</p>
          <p class="comment">
            <span class="bold-text comment-user-name">${post.username}</span> ${post.comment}
          </p>
        </div>
      </div>
    `

  container.appendChild(postElement)
})
