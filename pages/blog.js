import React from 'react';
import Layout from "../components/layout";
import Link from "next/link";

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link href='/blog/[title]' as={'/blog/react'}>
                        <a>React</a>
                    </Link>
                </li>

                <li>
                    <Link href='/blog/[title]' as={'/blog/vue'} passHref>
                        Vue
                    </Link>
                </li>
                <li>
                    <Link href='/blog/[title]' as={'/blog/angular'}>
                        <a>Angular</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog/[title]' as={'/blog/svelte'}>
                        <a>Svelte</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    );
};

export default Blog
;
