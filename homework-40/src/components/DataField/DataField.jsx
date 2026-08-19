import { useState, useEffect } from 'react';

function DataField()  {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Ошибка загрузки</p>;
    }

    return(
        <ul>
            <li>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </li>
        </ul>
    )
}

export default DataField;