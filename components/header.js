import React from 'react';
import Link from "next/link"


export const Header = () => {
    const styles = {
        header: {
            margin: 20,
            padding: 20,
            border: "1px solid #DDD"
        },
        link: {
            margin: 20
        },
    }

    return (
        <div style={styles.header}>
            <Link href="/" passHref>
                <span style={styles.link}>Home</span>
            </Link>
            <Link href="/blog" passHref>
                <span style={styles.link}>Blog</span>
            </Link>
            {/*passHref remplace <a href></a>*/}
            <Link href="/profile">
                <a href="/profile">
                    <span style={styles.link}>Profile</span>
                </a>
            </Link>
            <Link href="/blog/items" passHref>
                <span style={styles.link}>Items</span>
            </Link>
            <Link href="/blog/categories" passHref>
                <span style={styles.link}>Catégories</span>
            </Link>
        </div>
    );
};

