import React from 'react';
import Layout from "../components/layout";
import Link from "next/link";

const PostLink = ({title}) => (
    <li>
        <Link href='/blog/[title]' as={`/blog/${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

const Blog = () => {
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
        </Layout>
    );
};

export default Blog
;
