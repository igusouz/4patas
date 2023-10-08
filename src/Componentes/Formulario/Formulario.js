import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import ListaRacaPets from '../ListaRacaPets/ListaRacaPets.js';
import DataNascimentoPet from '../DataNascimentoPet/DataNascimentoPet.js';
import FotoDoPet from '../FotoDoPet/FotoDoPet';

const Formulario = () => {
    const times=[
        'Gato',
        'Cachorro',
    ]
    const racas=[
        'Dachshund',
        'Poodle',
        'Rottweiler',
        'Labrador'
    ]

    return (
        <section className='formulario'>
                <form>
                    <h1>Registre o nome do Seu Pet!😊</h1>
                    <CampoTexto label="Nome do Pet" placeholder="Digite seu o nome do pet"/>
                    <ListaSuspensa label="Tipo de Pet" itens={times} />
                    <ListaRacaPets label="Raça do Pet" itens={racas} />
                    <DataNascimentoPet label="Data de nascimento do Pet" placeholder="Selecione a data de nascimento do pet"/>
                    <FotoDoPet label="Foto do pet" placeholder="Selecione a foto do seu pet"/>
                    <div className="button-container">
                        <button>Finalizar Cadastro</button>
                    </div>
                </form>
        </section>
    );
}

export default Formulario;