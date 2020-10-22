
import Axios from "axios";
import { drawData } from "./utils/dom";

const wrapper = document.getElementById('data');


const checkAxios = (apiUrl) => Axios.get(apiUrl)
.then((response) => drawData(response.data, wrapper))
.catch(function (error) {
  console.log('Something is wrong, because ' + error);
});


const syncPromise = async () => {
  const p1 = checkAxios ('https://rickandmortyapi.com/api/character/1');
  const p2 = checkAxios ('https://rickandmortyapi.com/api/character/2');
  const p3 = checkAxios ('https://rickandmortyapi.com/api/character/3');
  const p4 = checkAxios ('https://rickandmortyapi.com/api/character/4');
  const p5 = checkAxios ('https://rickandmortyapi.com/api/character/5');
  const p6 = checkAxios ('https://rickandmortyapi.com/api/character/8');
  const res = await Promise.all([p1, p2, p3, p4, p5, p6]);
  
};

syncPromise();




