// code is expected to run in browser
// does not run under node ( node -e async-await.js)

async function getInformation() {
  var id = await getUserId();

  // getUserCity wil be blocked until id is available
  // desirable behavior when one call is dependent on another
  var city = await getUserCity(id);
  console.log({ id, city });
}

// non blocking async call,
// desirable behavior when one call is INdependent of other
async function getAddress() {
  let [address, city, state, zip] = await Promise.all([
    getAddress(),
    getCity(),
    getState(),
    getZip()
  ]);

  console.log({ address, city, state, zip });
}
