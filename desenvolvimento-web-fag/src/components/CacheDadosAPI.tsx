import React, { useEffect, useState } from 'react';

interface Amiibo {
    name: string;
}

const CacheDadosAPI: React.FC = () => {
    const [dados, setDados] = useState<Amiibo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
            const data = await response.json();
            setDados(data.amiibo);
            localStorage.setItem('dados', JSON.stringify(data.amiibo));
        };

        fetchData();

        return () => localStorage.removeItem('dados');
    }, []);

    return (
        <section>
            <h2>Dados da API</h2>
            <ul>
                {dados.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default CacheDadosAPI;
