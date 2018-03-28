function renderSideBar(){
    var month_year = getCurrentMonth (current_month, current_year);
    var new_days = getCurrentDays (current_month, current_year);
    var accounts = [];
    var calendars_list = [
        '<div class="calendars_list">'
        ];
    month_year = month_year[0] + '<br>' + month_year[1];
    var mini_cal = [
        '<div class="bound"></div>',
        '<div class="mini_cal">',
        '<div class="month">',
        '<ul>',
        '<li class="prev">&#10094;</li>',
        '<li class="next">&#10095;</li>',
        '<li class="current_month">',
        month_year,
        '<br></li></ul></div>',
        '<div class="days">',
        '<table class="weekdays_table">',
        new_days,
        '</table></div>'
    ];
    if (localStorage.length === 0){
         mini_cal = ['<div class="calendars_list"></div>'].concat(mini_cal);
         document.getElementsByClassName("sidenav")[0].innerHTML = mini_cal.join('');
        // document.getElementsByClassName("weekdays_table")[0].innerHTML = new_days;
    }
    else{
        accounts = getFromLocalStorage('calendars');
        var calendars = [];
        for (var i = 0;i<accounts.length;i++){
            calendars = Object.keys(accounts[i]);
            calendars_list.push('<div class="accounts">'+accounts[i].name+'</div><div class="calendars"><ul>');
            for (var j = 1; j < calendars.length;j++){
                calendars_list.push('<li><input type="checkbox"'+ accounts[i][calendars[j]] +'>'+ calendars[j]+'</li>');
            }
            calendars_list.push('</ul></div>');
        }
        calendars_list.push('</div>');
        var sidebar = calendars_list.concat(mini_cal);
        document.getElementsByClassName("sidenav")[0].innerHTML = sidebar.join('');
    }
}