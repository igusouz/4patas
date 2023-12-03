import React, { useState } from 'react';
import "../styles.css";
import './Form.css';
import { criarPet } from '../Servicos/Pets'; // Importe criarPet

function AdicionarPets() {
    const [nomeDoPet, setNomeDoPet] = useState('');
    const [nomeDoTutor, setNomeDoTutor] = useState('');
    const [tipoDoPet, setTipoDoPet] = useState('');
    const [enderecoDoPet, setEnderecoDoPet] = useState('');
  
    const handleCadastro = async () => {
      try {
        const novoPet = await criarPet({
          nomeDoPet: nomeDoPet,
          nomeDoTutor: nomeDoTutor,
          tipoDoPet: tipoDoPet,
          enderecoDoPet: enderecoDoPet
        });
        
        console.log('Novo pet cadastrado: ', novoPet);

        setNomeDoPet('');
        setNomeDoTutor('');
        setTipoDoPet('');
        setEnderecoDoPet('');
      } catch (error) {
        console.log('Erro ao cadastrar pet', error);
      }
    }

    return (
      <div className="App">
        <div className='formulario-container'>
          <h2>Registre o nome do seu Pet!😊</h2>
              <form className='formulario-cadastro'>
                <label>Nome do pet</label>
                <input type="text" placeholder="Digite o nome do Pet" value={nomeDoPet} onChange={(e) => setNomeDoPet(e.target.value)} />

                <label>Nome do Tutor</label>
                <input type="text" placeholder="Digite o nome do tutor do Pet" value={nomeDoTutor} onChange={(e) => setNomeDoTutor(e.target.value)} />

                <label>Tipo de Pet </label>
                <input type="text" placeholder="Digite o tipo de pet" value={tipoDoPet} onChange={(e) => setTipoDoPet(e.target.value)} />

                <label>Endereço do Pet </label>
                <input type="text" placeholder="Digite o endereço do pet"value={enderecoDoPet} onChange={(e) => setEnderecoDoPet(e.target.value)} />

                <button type='button' onClick={handleCadastro}>
                  Finalizar cadastrado
                </button>
              </form>
          </div>
      </div>
    );
}

export default AdicionarPets;