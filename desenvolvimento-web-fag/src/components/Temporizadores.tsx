import React, { useState, useEffect, useRef } from 'react';

const Temporizadores: React.FC = () => {
    const [tempo, setTempo] = useState<number>(10);
    const [ativo, setAtivo] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Timer Regressivo
    useEffect(() => {
        const interval = setInterval(() => {
            setTempo((prevTempo) => (prevTempo > 0 ? prevTempo - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Temporizador Pausável
    const iniciarOuRetomar = () => {
        if (!ativo) {
            setAtivo(true);
            timerRef.current = setInterval(() => {
                setTempo((prev) => prev + 1);
            }, 1000);
        }
    };

    const pausar = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setAtivo(false);
    };

    return (
        <section>
            <h2>Temporizadores</h2>
            <div>
                <h3>Timer Regressivo: {tempo}s</h3>
                <button onClick={ativo ? pausar : iniciarOuRetomar}>
                    {ativo ? 'Pausar' : 'Retomar'}
                </button>
            </div>
        </section>
    );
};

export default Temporizadores;
