import React from 'react';
import Layout from "../components/layout";
import axios from 'axios';
import {useRouter} from "next/router";
import Head from "next/head";

const Departement = ({data}) => {
    const router = useRouter()
    console.log(router)

    const styles = {
        padding: 10,
        margin: 10,
        borderBottom: "1px solid black"
    }

    return (
        <>
            <Head>
                <title>Liste des départements</title>
            </Head>
            <Layout>
                {data.map(departement=> (
                    <div style={styles} key={departement.code}>
                        <h1>{departement.nom}</h1>
                        <div>code de département : {departement.code}</div>
                        <div>Code de la région: {departement.codeRegion}</div>
                    </div>
                ))}
            </Layout>
        </>
    );
};

Departement.getInitialProps = async(context)=> {
    const url = "https://geo.api.gouv.fr/departements/";
    const {data} = await axios.get(url)
    return {
        data
    }
}

export default Departement;
