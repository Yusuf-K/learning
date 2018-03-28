window.onload = function (){
    var page = localStorage.getItem('view');
    window.location.replace('/'+page+'.html');
};