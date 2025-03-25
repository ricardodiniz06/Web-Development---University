import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
            <h1>Minha Dashboard React</h1>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
                    <li style={{ margin: '0 15px' }}>Home</li>
                    <li style={{ margin: '0 15px' }}>Tarefas</li>
                    <li style={{ margin: '0 15px' }}>Temporizadores</li>
                    <li style={{ margin: '0 15px' }}>Calculadora</li>
                    <li style={{ margin: '0 15px' }}>API</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
