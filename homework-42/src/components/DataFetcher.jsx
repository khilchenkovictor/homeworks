import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
    
const Div = styled.div`
    max-width: 600px;
    margin: 0;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    border: 2px solid grey;
    padding: 16px;
    border-radius: 10px;
`;

const Loading = styled.p`
    font-size: 25px;
`;

const Error = styled.p`
    font-size: 25px;
    color: red;
`;

function DataFetcher() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);

            const randomNumber = Math.floor(Math.random() * 100) + 1;

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`);
                setData(response.data);
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading>Loading...</Loading>
    }

    if (error) {
        return <Error>Error: {error}</Error>
    }

    return (
        <Div>
            <p>ID: {data.id}</p>
            <p>User ID: {data.userId}</p>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
        </Div>
    )
}

export default DataFetcher;