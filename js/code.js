const menuID = document.getElementById("menu");

//menu
menuID.innerHTML = `
  <nav class="menu">
      <a href="https://${window.location.host}/businesses" class="menu__button">Home</a>
      <a href="https://${window.location.host}/businesses/businesses/businesses.html" class="menu__button">Businesses</a>
      <a href="https://${window.location.host}/businesses/social-network/social-network.html" class="menu__button">Social N</a>
  </nav>
`;
