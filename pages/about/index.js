import Link from 'next/link'
import Head from 'next/head'
import Styles from '../../styles/About.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props:{
            posts: data
        }
    }
}
const About = ({posts}) => {
    return ( 
        <div className={Styles.container}>
            <Head>
                <title>App | About</title>
            </Head>
            About
            <Link href="/"><a>Go Back To Home</a></Link>
            <div>
                {posts.map(p => (
                    <Link href={`/about/${p.id}`} style={{
                        marginBottom: "10px"
                    }} key={p.id}>
                    <a>
                    <div key={p.id}>{p.title}</div>
                    </a>
                    </Link>
))}
            </div>
        </div>
     );
}
 
export default About;