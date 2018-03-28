function changeView(new_view){
    localStorage.setItem('view',new_view);
    window.current_view = new_view;
    window.location.replace('/'+new_view+'.html');
}