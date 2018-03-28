var current_month = new Date().getMonth();
var current_year = new Date().getFullYear();
// var current_view = 'month';
// var previous_button = 'year_button';
window.onload = function () {
     var mini_year = current_year;
     var mini_month = current_month;
     var current_view = localStorage.getItem('view');
     window.current_view = current_view;
     renderTopBar(current_view);
     // renderContentHead();
     renderSideBar();
     renderView(current_view);
     document.getElementsByClassName("prev")[0].onclick = function() {
         mini_month-=1;
         if (mini_month > 11){
             mini_month = mini_month%12;
             mini_year+=1;
         }
         else if(mini_month < 0){
             mini_month += 12;
             mini_year -= 1;
         };
         var month_year = getCurrentMonth (mini_month, mini_year);
         var new_days = getCurrentDays (mini_month, mini_year);
         document.getElementsByClassName("current_month")[0].innerHTML = month_year[0] + '<br>' + month_year[1];
         document.getElementsByClassName("weekdays_table")[0].innerHTML = new_days;
     };
     document.getElementsByClassName("next")[0].onclick = function() {
         mini_month+=1;
         if (mini_month > 11){
             mini_month = current_month%12;
             mini_year+=1;
         }
         else if(mini_month < 0){
             mini_month += 12;
             mini_year -= 1;
         };
         var month_year = getCurrentMonth (mini_month, mini_year);
         var new_days = getCurrentDays (mini_month, mini_year);
         document.getElementsByClassName("current_month")[0].innerHTML = month_year[0] + '<br>' + month_year[1];
         document.getElementsByClassName("weekdays_table")[0].innerHTML = new_days;
    };
    document.getElementsByClassName("view_prev")[0].onclick = function() {
        if (current_view === 'year'){
            // renderContentHead();
            // var curr_view_date = getCurrentViewDate(current_view, current_year,current_month);
            // document.getElementsByClassName('content_head')[0].innerHTML = curr_view_date;
            renderView(current_view);
        }
        if (current_view === 'month'){
            current_month-=1;
            if (current_month > 11){
                current_month = current_month%12;
                current_year+=1;
            }
            else if(current_month < 0){
                current_month += 12;
                current_year -= 1;
            };
            // renderContentHead();
            //getCurrentViewDate(current_view, current_year,current_month);
            renderView(current_view);
        }
    };
    document.getElementsByClassName("view_next")[0].onclick = function() {
        if (current_view === 'year'){
            current_year += 1;
            //getCurrentViewDate(current_view, current_year,current_month);
            renderView(current_view);
            // renderContentHead();
        }
        if (current_view === 'month'){
            current_month+=1;
            if (current_month > 11){
                current_month = current_month%12;
                current_year+=1;
            }
            else if(current_month < 0){
                current_month += 12;
                current_year -= 1;
            };
            //getCurrentViewDate(current_view, current_year,current_month);
            renderView(current_view);
            // renderContentHead();
        }
    };
    document.getElementsByClassName("month_button")[0].onclick = function() {
        changeView('month');
    }
    document.getElementsByClassName("year_button")[0].onclick = function() {
        changeView('year');
    }

};

