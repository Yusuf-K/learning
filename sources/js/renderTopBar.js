function renderTopBar(viewType) {
    var viewButtons = [
        '<button  value="Day" class="button day_button',
        '">Day</button>',
        '<button  value="week" class="button week_button',
        '">Week</button>',
        '<button  value="Month" class="button month_button',
        '">Month</button>',
        '<button value="Year" class="button year_button',
        '">Year</button></div>'
        // '<input type="text" placeholder="Search..">'
    ];
    if (viewType === 'day'){
        viewButtons[0] +=' active_button';
    }
    else if (viewType === 'week'){
        viewButtons[2]+=' active_button';
    }
    else if (viewType === 'month'){
        viewButtons[4]+=' active_button';
    }
    else if (viewType === 'year'){
        viewButtons[6]+=' active_button';
    }
    var buttons=[
        '<button value="Calendars" class="button sidebar_button hide_cal_button">Calendars</button>',
        '<button value="+" class="button sidebar_button add_button">+</button>',
        '<div class="choose_view_buttons">'
        // '<button value="day" class="button day_button">Day</button>',
        // '<button value="week" class="button week_button">Week</button>',
        // '<button value="month" class="button month_button active_button">Month</button>',
        // '<a href="index.html"><button value="year" class="button year_button">Year</button></a></div>',
        // '<input type="text" placeholder="Search..">'
    ];
    buttons = buttons.concat(viewButtons);
    buttons.push('<input type="text" placeholder="Search..">');
    console.log(buttons.join(''));
    var ins = buttons.join('');
    document.getElementsByClassName('topbar')[0].innerHTML = ins;
    // document.body.insertBefore(newDiv, my_div);
    // var newDiv = document.createElement("div");
    // newDiv.innerHTML = buttons.join(' ');
    // var my_div = document.getElementsByClassName('content_head')[0];
    // document.body.insertBefore(newDiv, my_div);
}
