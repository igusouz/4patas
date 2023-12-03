import './TablePets.css';
import React, { useState, useEffect } from "react";
import { getPets, atualizarPet, removerPet } from "../Servicos/Pets";
import "../styles.css";

function Pets() {
  const [pets, setPets] = useState([]);
  const [edicao, setEdicao] = useState(null);
  const [nomeDoPet, setNomeDoPet] = useState("");
  const [nomeDoTutor, setNomeDoTutor] = useState("");
  const [tipoDoPet, setTipoDoPet] = useState("");
  const [enderecoDoPet, setEnderecoDoPet] = useState("");

  useEffect(() => {
    loadPets();
  }, []);
  
  const loadPets = async () =>{
    try{
      
      const listaPets = await getPets();
      setPets(listaPets);

    }catch (error){
      console.error("Erro ao carregar seus PETS: ", error);
    }
  }

  const handleEditar = (pets) => {
    setEdicao(pets._id);
    setNomeDoPet(pets.nomeDoPet);
    setNomeDoTutor(pets.nomeDoTutor);
    setTipoDoPet(pets.tipoDoPet);
    setEnderecoDoPet(pets.enderecoDoPet);
  };

  const handleAtualizar = async () => {
    try{
      await atualizarPet(edicao,{
        nomeDoPet: nomeDoPet,
        nomeDoTutor: nomeDoTutor,
        tipoDoPet: tipoDoPet,
        enderecoDoPet: enderecoDoPet,
      });

      setEdicao(null);
      setNomeDoPet("");
      setNomeDoTutor("");
      setTipoDoPet("");
      setEnderecoDoPet("");

      loadPets();

    }catch(error){
      console.error("Erro ao atualizar a lista de PETS", error)
    }
  };

  const handleExcluir = async (id) => {
    try{
      await removerPet(id);

      loadPets();

    }catch(error){
      console.error("Erro ao excluir PET: ", error)
    }
  };

  return (
    <section className="gerenciamento-de-pets">
        <div className='topo-gerenciamento'>
          <h2>Gerenciamento de Pets</h2>
            <a href='/pets/adicionarPet'>
                <button className='adicionar-pet'>Adicionar Pet</button>
            </a>

        </div>
       
        <hr/>
        
        <div className='dados-pets'>
          <ul>
            {pets && pets.map((pets) => (
              <li key={pets._id}>
                 <b><i>Nome do pet: </i></b> {pets.nomeDoPet} | <b><i>Nome do tutor: </i></b> {pets.nomeDoTutor} | <b><i>Tipo do Pet: </i></b>{pets.tipoDoPet} | <b><i>Endereço: </i></b>{pets.enderecoDoPet} | <b><i>Ações: </i></b>
                <button className="editar-pet" onClick={() => handleEditar(pets)}>Editar</button> 
                <button className="excluir-pet" onClick={() => handleExcluir(pets)}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
        
        {edicao !== null &&(
          <div className='edicao-pet'>
            <h3>Editar pet</h3>
            <label>Nome do PET</label>
            <input type="text" value={nomeDoPet} onChange={(e) => setNomeDoPet(e.target.value)}/>

            <label>Nome do tutor</label>
            <input type="text" value={nomeDoTutor} onChange={(e) => setNomeDoTutor(e.target.value)}/>

            <label>tipoDoPet</label>
            <input type="text" value={tipoDoPet} onChange={(e) => setTipoDoPet(e.target.value)}/>

            <label>Endereço</label>
            <input type="text" value={enderecoDoPet} onChange={(e) => setEnderecoDoPet(e.target.value)}/>

            <button className="atualizar-pet" onClick={handleAtualizar}>Atualizar</button>
          </div>
        )}
    </section>
  )
}

export default Pets;