
import Axios from "axios";

const getNewPerson = (data, name) => {
  Axios.get(data.episode[0]).then(() => {
    const person = document.getElementsByName(name);
  });
}

export const createDataElement = (data) => {
  getNewPerson(data, name);

  const partsOfCards = `<div class="card">
    <img class ="image" src="${data.image}"></img>
    <div class="about">
    <p class = nameOfHero>${data.name}</p>
    <span class="status">${data.status}</span>
    <span class="species">- ${data.species}</p>
    <p class="comment">Last known location:</p>
    <p class="location">${data.location.name}</p>
    <p class="comment">First seen in:</p>
    <p class="location">${data.origin.name}</p>
    </div>
    </div>`;
  return partsOfCards;
}

export const drawData = (data, wrapper = document.body) => {
  const div = document.createElement('div');
  wrapper.appendChild(div);
  div.innerHTML = createDataElement(data);
};

