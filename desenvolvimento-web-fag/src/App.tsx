import CacheDadosAPI from "./components/CacheDadosAPI";
import Calculadora from "./components/Calculadora";
import Header from "./components/header";
import ListaFiltrada from "./components/ListaFiltrada";
import Tarefas from "./components/Tarefas";
import Temporizadores from "./components/Temporizadores";


const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <Tarefas />
                <Temporizadores />
                <Calculadora />
                <ListaFiltrada />
                <CacheDadosAPI />
            </main>
        </div>
    );
};

export default App;
