import React from 'react';
import Layout from "../components/layout";
import Link from "next/link";
import axios from "axios";

const Blog = ({posts}) => {
    const styles = {
        main: {
            margin: 20,
            padding: 20,
            borderBottom: "1px solid black"
        },
        img: {
            height: 200,
            width: 300
        }
    }

    return (
        <Layout>
            {posts.map(post => (
                <div key={post._id} style={styles.main}>
                    <h1>{post.title}</h1>
                    <div>
                        <img src={post.pictures[0]} alt="imag" style={styles.img}/>
                    </div>
                    <div>{post.body}</div>
                </div>
            ))}
        </Layout>
    );
};

export const getStaticProps = async(context) => {
    const url = "https://aqueous-meadow-07678.herokuapp.com";
    const {data} = await axios.get(`${url}/api/posts`);
    const posts = data.data
    return {
        props: {
            posts
        }
    }
}

export default Blog
;
