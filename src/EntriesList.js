import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EntriesList = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/form');
                setEntries(response.data);
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        };

        fetchEntries();
    }, []);

    return (
        <div>
            <h2>Записи</h2>
            <ul>
                {entries.map(entry => (
                    <li key={entry.id}>
                        <strong>ФИО:</strong> {entry.name}<br />
                        <strong>Объект:</strong> {entry.subject}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EntriesList;