const socialNetworkID = document.getElementById("social_network");

const get_data = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();

  return data;
};

const app = async () => {
  const data = await get_data();

  for (let i = 0; i < data.app.length; i++) {
    //Set Social Network Data
    socialNetworkID.innerHTML += `
      <a href="../social-network/${data.app[
      i
    ].name.toLowerCase()}.html" class="account__app">
      <svg class="icon icon-${data.app[i].name.toLowerCase()}">
      <use xlink:href="../icomoon/icon.svg#icon-${data.app[
        i
      ].name.toLowerCase()}"></use>
      </svg>
      ${data.app[i].name}</a
    >
    `;
  }
};

app();
