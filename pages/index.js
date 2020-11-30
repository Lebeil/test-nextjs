import React from 'react';
import Layout from "../components/layout";
import axios from 'axios'
import Link from "next/link";

const Home = ({data}) => {
    const styles = {
        padding: 10,
        margin: 10,
        borderBottom: '1px solid black'
    }

    return (
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
    )
}

export const getServerSideProps = async (context)=> {
    const url = "https://geo.api.gouv.fr"
    const {data} = await axios.get(`${url}/regions`)
    return {
        props: {
            data
        }
    }
}

export default Home;
