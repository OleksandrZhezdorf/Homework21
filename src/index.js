import Axios from "axios";
import drawData from "./utils/dom";


const apiUrl = 'http://localhost:3000';

const addBtn = document.getElementById('add'),
  deleteBtn = document.getElementById('delete'),
  wrapper = document.getElementById('data');


const checkAxios = (apiUrl) => Axios.get(apiUrl)
.then((response) => drawData(response.data, wrapper))
.catch(function (error) {
  console.log('Something is wrong, because ' + error);
});

checkAxios(apiUrl);

wrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    checkAxios(`${apiUrl}/delete?id=${e.target.dataset.userId}`)
  }
});

addBtn.addEventListener('click', () => {
  checkAxios(`${apiUrl}/add`)
});

deleteBtn.addEventListener('click', () => {
  checkAxios(`${apiUrl}/delete`)
});







