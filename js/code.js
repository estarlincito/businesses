const menuID = document.getElementById("menu");

//menu
menuID.innerHTML = `
  <div class="munu">
  <a href="https://${window.location.host}/businesses">Home</a>
  <a href="https://${window.location.host}/businesses/businesses/businesses.html">Businesses</a>
  <a href="https://${window.location.host}/businesses/social-network/social-network.html">Social Network</a>
  </div>
`;