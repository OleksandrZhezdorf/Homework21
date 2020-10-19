export const createDataElement = (element) => `<div>
    <span class = "idlist">ID: ${element.id}</span>
    <span class = "namelist">Name: ${element.name}</span>
    <span data-user-id="${element.id}" class="delete">X</span>
</div>`;

export const createData = (data) =>
  data.map((element) => createDataElement(element)).join('');

  const drawData = (data, wrapper = document.body) =>
  (wrapper.innerHTML = createData(data));

  export default drawData;