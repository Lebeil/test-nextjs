import React from 'react';
import {useRouter} from "next/router";

const Titre = () => {
    const router = useRouter()
    console.log(router)

    return (
        <div>
            <h1>{router.query.titre}</h1>
        </div>
    );
};

export default Titre;
