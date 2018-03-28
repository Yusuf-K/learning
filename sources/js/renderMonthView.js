function renderMonthView (current_month){
    var table = getCurrentDays (current_month, current_year);
    table = '<div class="month_view"><table>' + table + '</table></div>';
    document.getElementsByClassName('view')[0].innerHTML = table;
    // console.log(table_header + days.join(' '));

}
