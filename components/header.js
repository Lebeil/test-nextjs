import React from 'react';
import Link from "next/link"
import {useRouter} from "next/router";


export const Header = () => {
    const router = useRouter();
    /*console.log(router)*/

    const styles = {
        header: {
            margin: 20,
            padding: 20,
            border: "1px solid #DDD"
        },
        link: {
            margin: 20
        },
        active: {
            paddingBottom: 6,
            margin: 20,
            borderBottom: "3px solid blue"
        }
    }

    return (
        <div style={styles.header}>
            <Link href="/">
                <a>
                    <span style={router.pathname === '/' ? styles.active : styles.link}>Home</span>
                </a>
            </Link>
            <Link href="/blog">
                <a>
                    <span style={router.pathname === '/blog' ? styles.active : styles.link}>Blog</span>
                </a>
            </Link>

            {/*passHref remplace <a></a>*/}
            <Link href="/profile">
                <a>
                    <span style={router.pathname === '/profile' ? styles.active : styles.link}>Profile</span>
                </a>
            </Link>
            <Link href="/blog/items">
                <a>
                    <span style={router.pathname === '/blog/items' ? styles.active : styles.link}>Items</span>
                </a>

            </Link>
            <Link href="/blog/categories">
                <a>
                    <span style={router.pathname === '/blog/categories' ? styles.active : styles.link}>Catégories</span>
                </a>

            </Link>
            <Link href="/departements">
                <a>
                    <span style={router.pathname === '/departements' ? styles.active : styles.link}>Départements</span>
                </a>
            </Link>
        </div>
    );
};

