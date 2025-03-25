import React, { useState } from 'react';

interface Tarefa {
    id: number;
    texto: string;
}

const Tarefas: React.FC = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [novaTarefa, setNovaTarefa] = useState<string>('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim()) {
            const nova: Tarefa = { id: Date.now(), texto: novaTarefa };
            setTarefas([...tarefas, nova]);
            setNovaTarefa('');
        }
    };

    return (
        <section>
            <h2>Lista de Tarefas</h2>
            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>{tarefa.texto}</li>
                ))}
            </ul>
        </section>
    );
};

export default Tarefas;
