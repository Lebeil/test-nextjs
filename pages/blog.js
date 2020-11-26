import React from 'react';
import Layout from "../components/layout";
import Link from "next/link";
import {useRouter} from "next/router";

const PostLink = ({title}) => (
    <li>
        <Link href={`/blog?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

const Blog = () => {
    const router = useRouter()
    /*console.log(router.query)*/
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <PostLink title="react"/>
                <PostLink title="vue"/>
                <PostLink title="angular"/>
                <PostLink title="svelte"/>
                <PostLink title="next"/>
            </ul>

            <h3>{router.query.title}</h3>
        </Layout>
    );
};

export default Blog
;
