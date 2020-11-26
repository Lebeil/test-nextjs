import React from 'react';
import axios from 'axios'

const CodeRegion = ({data}) => {

    return (
        <div>
            <h1>Région: {data.nom}</h1>
            <p>code: {data.code}</p>
        </div>
    );
};

export const getServerSideProps = async (context)=> {
    const code = context.params.code;
    const url = "https://geo.api.gouv.fr";
    const {data} = await axios.get(`${url}/regions/${code}`)
    return {
        props: {
            data
        }
    }
}

export default CodeRegion;
