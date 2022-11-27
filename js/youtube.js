const youtubeID = document.getElementById("youtube");

//get_data of JSON
const get_data = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  return data;
};

const app = async (num, id) => {
  const data = await get_data();

  // Set Social Network Data
  for (let i = 0; i < data.businesses.length; i++) {
    //if yb is estarlincitoM
    if (data.businesses[i].user_name === "estarlincitoM") {
      id.innerHTML += `
      <a href="${
        data.app[num].url
      }estarlincito_m" target="_blank" class="account__app">
      <svg class="icon icon-${data.app[num].name.toLowerCase()}">
      <use xlink:href="../icomoon/icon.svg#icon-${data.app[
        num
      ].name.toLowerCase()}"></use>
      </svg>
      ${data.businesses[i].name}</a
    >
  `;
    } else {
      id.innerHTML += `
      <a href="${data.app[num].url}${data.businesses[
        i
      ].user_name.toLowerCase()}" target="_blank" class="account__app">
      <svg class="icon icon-${data.app[num].name.toLowerCase()}">
      <use xlink:href="../icomoon/icon.svg#icon-${data.app[
        num
      ].name.toLowerCase()}"></use>
      </svg>
      ${data.businesses[i].name}</a
    >
  `;
    }
  }

  //Open All URL
  id.innerHTML += `
      <a onclick="openAll(${num})" class="account__app">
        <svg class="icon icon-${data.app[num].name.toLowerCase()}">
          <use xlink:href="../icomoon/icon.svg#icon-${data.app[
            num
          ].name.toLowerCase()}"></use>
        </svg>
        Open All</a
      >
        `;
};

//Open All URL
const openAll = async (num) => {
  const data = await get_data();

  for (let i = 0; i < data.businesses.length; i++) {
    //if yb is estarlincitoM
    if (data.businesses[i].user_name === "estarlincitoM") {
      window.open(`${data.app[num].url}estarlincito_m`);
    } else {
      window.open(
        `${data.app[num].url}${data.businesses[i].user_name.toLowerCase()}`
      );
    }
  }
};

app(1, youtubeID);
