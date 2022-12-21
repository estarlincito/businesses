const estarlincitoqID = document.getElementById("estarlincitoq");

//get_data of JSON
const get_data = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  return data;
};

const app = async (num, id) => {
  const data = await get_data();

  // Set Social Network Data
  for (let i = 0; i < data.app.length; i++) {
    id.innerHTML += `
        <a href="${data.app[i].url}${data.businesses[
      num
    ].user_name.toLowerCase()}" target="_blank" class="account__app">
        <svg class="icon icon-${data.app[i].name.toLowerCase()}">
        <use xlink:href="../icomoon/icon.svg#icon-${data.app[
          i
        ].name.toLowerCase()}"></use>
        </svg>
        ${data.businesses[num].user_name.toLowerCase()}</a
      >
    `;
  }
};

app(3, estarlincitoqID);
