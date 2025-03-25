import React, { useState, useMemo } from 'react';

const ListaFiltrada: React.FC = () => {
    const [filtro, setFiltro] = useState<string>('');
    const lista: string[] = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'];

    // Otimiza o filtro usando useMemo
    const itensFiltrados = useMemo(() => {
        return lista.filter((item) => item.toLowerCase().includes(filtro.toLowerCase()));
    }, [filtro]);

    return (
        <section>
            <h2>Lista Filtrada</h2>
            <input
                type="text"
                placeholder="Filtrar itens"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <ul>
                {itensFiltrados.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default ListaFiltrada;
