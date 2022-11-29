import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export async function getData(endereco){
  return await api.get(endereco).then((response) => {
    return response.data
  })
  .catch((err) => console.error("ops! ocorreu um erro" + err))
}

export async function getDatas(enderecos){
  return Promise.all(
    await enderecos.map(
      async (endereco) => await getData(endereco)
    )
  )
}