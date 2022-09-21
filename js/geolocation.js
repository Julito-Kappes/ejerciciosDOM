const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $div = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const succes = (position) => {
    let coords = position.coords;
    console.log(position);

    $div.innerHTML = `
    <p>Tu posiciòn actual es:</p>
    <ul>
      <li>latitud: <b>${coords.latitude}</b> </li>
      <li><b>${coords.longitude}</b></li>
      <li><b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener" > Ver en Google Maps</a>
    `;
  };

  const error = (err) => {
    $div.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(err);
  };

  n.geolocation.getCurrentPosition(succes, error, options);
}
