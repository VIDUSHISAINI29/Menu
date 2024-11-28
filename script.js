const menu_bar_items = document.querySelectorAll('.menu_bar_items')
const sub_menu_bar = document.querySelectorAll('.sub_menu_bar')

menu_bar_items.forEach(element => {
    element.addEventListener('mouseover', function(){
        this.querySelector('.sub_menu_bar').classList.add('item_active')
    })
    element.addEventListener('mouseout', function(){
        this.querySelector('.sub_menu_bar').classList.remove('item_active')
    })
});