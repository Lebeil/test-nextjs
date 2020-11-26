import React from 'react';
import {useRouter} from "next/router";

const Title = () => {
    const router = useRouter()
    /*console.log(router.query)*/

    return (
        <div>
            <h1>{router.query.title}</h1>
        </div>
    );
};

export default Title;
