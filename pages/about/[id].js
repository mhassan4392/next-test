export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map(d => {
        return {
            params: { id: d.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const data = await res.json()
    return {
        props:{
            post: data
        }
    }
}

const PostDetail = ({post}) => {
    return ( 
        <div>
            {post.title}
        </div>
     );
}
 
export default PostDetail;