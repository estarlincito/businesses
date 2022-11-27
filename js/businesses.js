const businessesID = document.getElementById("businesses");

const get_data = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  return data;
};

const app = async () => {
  const data = await get_data();
  for (let i = 0; i < data.businesses.length; i++) {
    //Set Businesses Data
    businessesID.innerHTML += `
        <a href="../businesses/${data.businesses[i].user_name}.html" class="account__app">
        <img src="../img/${data.businesses[i].user_name}.jpg" alt="${data.businesses[i].name}" class="icon_bss">
        ${data.businesses[i].name}</a
        >
        `;
  }
};

app();
