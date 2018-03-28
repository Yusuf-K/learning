function renderYearView (current_year){

    var days = [];
    for (var i = 0; i < 12; i++){
        if (i%4 === 0){
            days.push('<div class="year_view_month">'+getCurrentMonth(i,current_year)[0]+
                '</div><div class="year_view_month">'+getCurrentMonth(i+1,current_year)[0]+
                '</div><div class="year_view_month">'+getCurrentMonth(i+2,current_year)[0]+
                '</div><div class="year_view_month">'+getCurrentMonth(i+3,current_year)[0]+
                '</div><table class="weekdays_table">'+ getCurrentDays (i, current_year) +'</table>');
        }
        else {
            days.push('<div class="year_view_months"><table class="weekdays_table">' + getCurrentDays(i, current_year) +
                '</table></div>');
        }

    }
    days = '<div class="year_view">' + days.join(' ') + '</div>';
    document.getElementsByClassName("view")[0].innerHTML = days;//months + '<br>' +  days ;
}
