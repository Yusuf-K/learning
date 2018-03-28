function getFromLocalStorage(key) {
    var item = localStorage.getItem(key);
    var object = JSON.parse(item);
    return object;
}