
const Api = {
  health
}


async function health() {
  let response = await fetch('http://localhost:9000/health');
  let user = await response.json();
  return user;
}



export default Api
