// postService.js
const postService = {}

postService.loadPosts = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await resp.json()
  return data
}

export default postService
