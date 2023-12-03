import axios from "axios";

const petsAPI = axios.create({
  baseURL: "http://localhost:3000/pets/"
});

async function getPets() {
  try {
    const response = await petsAPI.get('/');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados na API", error);
  }
}

async function criarPet(pet) {
  try {
    const response = await petsAPI.post('/', pet);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar PET na API", error);
  }
}

async function atualizarPet(id) {
  try {
    const response = await petsAPI.put(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar PET na API", error);
  }
}

async function removerPet(id) {
  try {
    const response = await petsAPI.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir cadastro de Pet com o ID ${id} na API`, error);
  }
}

export {
  getPets,
  criarPet,
  atualizarPet,
  removerPet
};
