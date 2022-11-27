
const menuID = document.getElementById("menu");

//menu
menuID.innerHTML = `
  <div class="munu">
  <a href="https://${window.location.host}/businesses">Home</a>
  <a href="https://${window.location.host}/businesses/businesses/businesses.html">Businesses</a>
  <a href="https://${window.location.host}/businesses/social_network/social-network.html">Social Network</a>
  </div>
`;

// const estarlincitoID = document.getElementById("estarlincito");
// const estarlincitosID = document.getElementById("estarlincitos");
// const estarlincitocID = document.getElementById("estarlincitoc");
// const estarlincitogID = document.getElementById("estarlincitog");
// const estarlincitoqID = document.getElementById("estarlincitoq");
// const estarlincitospID = document.getElementById("estarlincitosp");
// const estarlincitomcID = document.getElementById("estarlincitomc");
// const estarlincitofID = document.getElementById("estarlincitof");
// const estarlincitomID = document.getElementById("estarlincitom");
// const estarlincitofnID = document.getElementById("estarlincitofn");

// const linktrID = document.getElementById("linktr");
// const youtubeID = document.getElementById("youtube");
// const twitterID = document.getElementById("twitter");
// const instagramID = document.getElementById("instagram");
// const facebookID = document.getElementById("facebook");
// const tiktokID = document.getElementById("tiktok");



// const userName = {
//   estarlincito: "estarlincito",
//   estarlincitoS: "estarlincitos",
//   estarlincitoC: "estarlincitoc",
//   estarlincitoG: "estarlincitog",
//   estarlincitoQ: "estarlincitoq",
//   estarlincitoSP: "estarlincitosp",
//   estarlincitoMC: "estarlincitomc",
//   estarlincitoF: "estarlincitof",
//   estarlincitoM: "estarlincitom",
//   estarlincitoFN: "estarlincitofn",
// };

// const businessesN = {
//   estarlincito: "Estarlincito",
//   estarlincitoS: "Estarlincito Support's",
//   estarlincitoC: "Estarlincito Code",
//   estarlincitoG: "Estarlincito Game",
//   estarlincitoQ: "Estarlincito Quote",
//   estarlincitoSP: "Estarlincito Sports",
//   estarlincitoMC: "Estarlincito Movie Clips",
//   estarlincitoF: "Estarlincito Farandula",
//   estarlincitoM: "Estarlincito Music",
//   estarlincitoFN: "Estarlincito Finanzas",
// };

// const url = {
//   linktr: "https://linktr.ee/",
//   youtube: "https://youtube.com/@",
//   twitter: "https://twitter.com/",
//   instagram: "https://instagram.com/",
//   facebook: "https://facebook.com/",
//   tiktok: "https://www.tiktok.com/@",
// };

// //social-network page
// const social_network_page = (id, arr, userName, urlPath = "") => {
//   //if estarlincito... social-network page
//   if (window.location.pathname === urlPath) {
//     for (const property in arr) {
//       id.innerHTML += `
//         <a href="${arr[property]}${userName}" target="_blank" class="account__app">
//         <svg class="icon icon-${property}">
//         <use xlink:href="../icomoon/icon.svg#icon-${property}"></use>
//         </svg>
//         ${userName}</a
//       >
//     `;
//     }
//   }
// };

// social_network_page(
//   estarlincitoID,
//   url,
//   userName.estarlincito,
//   "/businesses/businesses/estarlincito-social-network.html"
// );
// social_network_page(
//   estarlincitosID,
//   url,
//   userName.estarlincitoS,
//   "/businesses/businesses/estarlincitos-social-network.html"
// );
// social_network_page(
//   estarlincitocID,
//   url,
//   userName.estarlincitoC,
//   "/businesses/businesses/estarlincitoc-social-network.html"
// );
// social_network_page(
//   estarlincitogID,
//   url,
//   userName.estarlincitoG,
//   "/businesses/businesses/estarlincitog-social-network.html"
// );
// social_network_page(
//   estarlincitoqID,
//   url,
//   userName.estarlincitoQ,
//   "/businesses/businesses/estarlincitoq-social-network.html"
// );
// social_network_page(
//   estarlincitospID,
//   url,
//   userName.estarlincitoSP,
//   "/businesses/businesses/estarlincitosp-social-network.html"
// );
// social_network_page(
//   estarlincitomcID,
//   url,
//   userName.estarlincitoMC,
//   "/businesses/businesses/estarlincitomc-social-network.html"
// );
// social_network_page(
//   estarlincitofID,
//   url,
//   userName.estarlincitoF,
//   "/businesses/businesses/estarlincitof-social-network.html"
// );
// social_network_page(
//   estarlincitomID,
//   url,
//   userName.estarlincitoM,
//   "/businesses/businesses/estarlincitom-social-network.html"
// );
// social_network_page(
//   estarlincitofnID,
//   url,
//   userName.estarlincitoFN,
//   "/businesses/businesses/estarlincitofn-social-network.html"
// );

// //Bussinesses
// const businesses = (id, arr) => {
//   for (const property in arr) {
//     id.innerHTML += `
//       <a href="https://${
//         window.location.host
//       }/businesses/businesses/${property.toLowerCase()}-social-network.html" class="account__app">
//       <img src="../img/${property.toLowerCase()}.jpg" alt="${property}" class="icon_home">
//       ${property}</a
//     >
//   `;
//   }
// };

// //social-network
// const social_network = (id, arr) => {
//   for (const property in arr) {
//     id.innerHTML += `
//       <a href="https://${
//         window.location.host
//       }/businesses/social_network/${property.toLowerCase()}.html" class="account__app">
//       <svg class="icon icon-${property}">
//       <use xlink:href="../icomoon/icon.svg#icon-${property}"></use>
//       </svg>
//       ${property}</a
//     >
//     `;
//   }
// };

// //Open All URL
// const openAll = (url) => {
//   for (const property in userName) {
//     window.open(`${url}${property.toLowerCase()}`);
//   }
// };

// //get URL Key
// const getUrlKey = (name) => {
//   return Object.keys(url).find((key) => url[key] === name);
// };

// //social-network-app
// const social_network_app = (id, arr, url, urlPath) => {
//   if (window.location.pathname === urlPath) {
//     for (const property in arr) {
//       id.innerHTML += `
//         <a href="${url}${property}" target="_blank" class="account__app">
//         <svg class="icon icon-${getUrlKey(url)}">
//         <use xlink:href="../icomoon/icon.svg#icon-${getUrlKey(url)}"></use>
//         </svg>
//         ${property}</a
//       >
//       `;
//     }

//     id.innerHTML += `
//     <a onclick="openAll('${url}', '${
//       userName.estarlincito
//     }')" class="account__app">
//       <svg class="icon icon-${getUrlKey(url)}">
//         <use xlink:href="../icomoon/icon.svg#icon-${getUrlKey(url)}"></use>
//       </svg>
//       Open All</a
//     >
//       `;
//   }
// };

// social_network_app(
//   linktrID,
//   userName,
//   url.linktr,
//   "/businesses/social_network/linktr.html"
// );

// social_network_app(
//   youtubeID,
//   userName,
//   url.youtube,
//   "/businesses/social_network/youtube.html"
// );

// social_network_app(
//   twitterID,
//   userName,
//   url.twitter,
//   "/businesses/social_network/twitter.html"
// );

// social_network_app(
//   instagramID,
//   userName,
//   url.instagram,
//   "/businesses/social_network/instagram.html"
// );

// social_network_app(
//   facebookID,
//   userName,
//   url.facebook,
//   "/businesses/social_network/facebook.html"
// );

// social_network_app(
//   tiktokID,
//   userName,
//   url.tiktok,
//   "/businesses/social_network/tiktok.html"
// );

// //if /businesses/businesses/businesses.html
// if (window.location.pathname === "/businesses/businesses/businesses.html") {
//   businesses(businessesID, businessesN);
// }

// //if /businesses/social_network/social-network.html
// if (
//   window.location.pathname === "/businesses/social_network/social-network.html"
// ) {
//   social_network(socialNetworkID, url);
// }

// const get_data = async () => {
//   const response = await fetch("./data.json");

//   console.log(await response.json());
// };

// get_data();
