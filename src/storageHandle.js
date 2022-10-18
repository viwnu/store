export default function storageHandle(state, setState, key, initial) {
  try {
    if(state === null && sessionStorage.getItem(key) !== null) {
      setState(JSON.parse(sessionStorage.getItem(key)));
    } else if(sessionStorage.getItem(key) === null) {
      setState(initial);
      sessionStorage.setItem(key, JSON.stringify(initial));
    } else {
      sessionStorage.setItem(key, JSON.stringify(state));
    }
  } catch(e) {
    console.error(e);
  }
}
