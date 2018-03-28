function putToLocalStorage(key, value) {
    var object = JSON.stringify(value);
    localStorage.setItem(key,object);
}