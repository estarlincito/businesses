const estarlincitomID = document.getElementById("estarlincitom");

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
    //chanse user_name yb
    if (data.app[i].url === "https://youtube.com/@") {
      id.innerHTML += `
      <a href="${
        data.app[i].url
      }estarlincito_m" target="_blank" class="account__app">
      <svg class="icon icon-${data.app[i].name.toLowerCase()}">
      <use xlink:href="../icomoon/icon.svg#icon-${data.app[
        i
      ].name.toLowerCase()}"></use>
      </svg>
      ${data.businesses[num].user_name.toLowerCase()}</a
    >
  `;
    } else {
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
  }
};

app(8, estarlincitomID);
