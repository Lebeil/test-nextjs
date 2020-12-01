import React, {Fragment} from 'react';
import Layout from "../components/layout";
import axios from 'axios';
import {useRouter} from "next/router";
import Head from "next/head";
import StyleDepartement from '../styles/Departement.module.css'

const Departement = ({data}) => {
    const router = useRouter()
    console.log(router)

    const styles = {
        cont: {
            padding: 20,
            margin: 20,
            borderBottom: "3px solid black"
        }

    }

    return (
        <Fragment>
            <Head>
                <title>Liste des départements</title>
            </Head>
            <Layout>
                {data.map(departement=> (
                    <div className={StyleDepartement.header} key={departement.code}>
                        <h1 className={StyleDepartement.h1}>{departement.nom}</h1>
                        <div>code de département : {departement.code}</div>
                        <div>Code de la région: {departement.codeRegion}</div>
                    </div>
                ))}
            </Layout>
        </Fragment>
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
