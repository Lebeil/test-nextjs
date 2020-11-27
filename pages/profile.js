import React, {useState, useEffect} from 'react';
import Layout from "../components/layout";
import axios from 'axios'


const Profile = () => {
    const [data, setData] = useState("");
    const url = "https://jsonplaceholder.typicode.com/users";

    const styles = {
        padding: 10,
        margin: 10,
        borderBottom: "1px solid grey"
    }

    useEffect(()=> {
        axios.get(url)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <Layout>
            {
                data && data.map(user=> (
                    <div key={user.id} style={styles}>
                        <h1>{user.name}</h1>
                        <div>
                            Email: {user.email}
                        </div>
                        <div>
                            Telephone: {user.phone}
                        </div>
                    </div>
                ))
            }
        </Layout>
    );
};

export default Profile;
