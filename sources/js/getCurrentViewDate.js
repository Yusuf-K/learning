function getCurrentViewDate (current_view, current_year, current_month){
    if (current_view === 'year'){
        return current_year;
    }
    if (current_view === 'month'){
        var month_year = getCurrentMonth (current_month, current_year);
        return month_year[0] + ' ' + month_year[1];
    }
}