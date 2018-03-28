function renderContentHead() {
    var content_head=[
    '<button value="next" class="button view_next content_buttons">&#10095;</button>',
    '<button value="today" class="button today content_buttons">Today</button>',
    '<button value="prev" class="button view_prev content_buttons">&#10094;</button>',
    '<div class="view_date">',
    getCurrentViewDate(current_view, current_year, current_month)
    ];
    document.getElementsByClassName('content_head')[0].innerHTML=content_head.join('');
}