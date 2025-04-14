
const postService = {}

postService.loadPosts = async (update) => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json()
        return update({ type: 'updater', payload: { name: 'agendas', value: data } })
        
    } catch (error) {
        console.log(error);

    }
}


export default postService