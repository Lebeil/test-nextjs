import React from 'react';
import Layout from "../components/layout";
import axios from 'axios'
import Link from "next/link";
import Head from "next/head";

const Home = ({data}) => {
    const styles = {
        padding: 10,
        margin: 10,
        borderBottom: '1px solid black'
    }

    console.log(process.env.API_ROOT)
    console.log(process.env.NEXT_PUBLIC_API_ROOT)
    return (
        <>
            <Head>
                <title>Liste des régions</title>
            </Head>
            <Layout>
                <div className="container">
                    {data.map(region=> (
                        <div key={region.code} style={styles}>
                            <Link href={`/region/${region.code}`}>
                                <h1>{region.nom}</h1>
                            </Link>

                            <p>{region.code}</p>
                        </div>
                    ))}
                </div>

            </Layout>
        </>

    )
}

export const getServerSideProps = async (context)=> {
    const url = process.env.API_GEO
    const {data} = await axios.get(`${url}/regions`)
    console.log(process.env.API_ROOT)
    return {
        props: {
            data
        }
    }
}

export default Home;
