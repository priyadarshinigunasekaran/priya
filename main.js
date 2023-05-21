var menu_list_array = ["Margherita", "Pepperoni", "Veggie Delight", "BBQ Chicken"];

function getmenu() {
    var menu_list_html = "<ul>";
    for (var i = 0; i < menu_list_array.length; i++) {
        menu_list_html += "<li>" + menu_list_array[i] + "</li>";
    }
    menu_list_html += "</ul>";
    document.getElementById("menu_list").innerHTML = menu_list_html;
}

function add_item() {
    var item = document.getElementById("add_item").value;
    if (item !== "") {
        menu_list_array.push(item);
        menu_list_array.sort();
        var added_menu_html = "<div>";
        for (var i = 0; i < menu_list_array.length; i++) {
            added_menu_html += "<div>" + menu_list_array[i] + "</div>";
        }
        added_menu_html += "</div>";
        document.getElementById("display_addedmenu").innerHTML = added_menu_html;
        document.getElementById("add_item").value = "";
    }
}
