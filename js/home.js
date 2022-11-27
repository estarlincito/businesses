const businessesID = document.getElementById("businesses");
const socialNetworkID = document.getElementById("social_network");

const get_data = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();

  for (let i = 0; i < 6; i++) {
    //Set Businesses Data
    businessesID.innerHTML += `
    <a href="https://${window.location.host}/businesses/businesses/${data.businesses[i].user_name.toLowerCase()}.html" class="account__app">
    <img src="./img/${data.businesses[i].user_name}.jpg" alt="${data.businesses[i].name}" class="icon_bss">
    ${data.businesses[i].name}</a
    >
    `;

    //Set Social Network Data
    socialNetworkID.innerHTML += `
      <a href="https://${
        window.location.host
      }/businesses/social-network/${data.app[
      i
    ].name.toLowerCase()}.html" class="account__app">
      <svg class="icon icon-${data.app[i].name.toLowerCase()}">
      <use xlink:href="./icomoon/icon.svg#icon-${data.app[
        i
      ].name.toLowerCase()}"></use>
      </svg>
      ${data.app[i].name}</a
    >
    `;
  }
};

get_data();
