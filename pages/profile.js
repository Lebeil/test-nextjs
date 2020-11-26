import React from 'react';
import Layout from "../components/layout";
import Link from "next/link";
import {useRouter} from "next/router";

const LinkName = ({name})=> (
    <li>
        <Link href={`/profile?name=${name}`}>
            <a>{name}</a>
        </Link>
    </li>
)


const Profile = () => {
    const router = useRouter()
    console.log(router.query)

    return (
        <Layout>
            <h1>Profile</h1>
            <ul>
                <LinkName name="Paul"/>
                <LinkName name="Joe"/>
                <LinkName name="Thomas"/>
                <LinkName name="Kevin"/>
            </ul>

            <h3>{router.query.name}</h3>
        </Layout>
    );
};

export default Profile;
