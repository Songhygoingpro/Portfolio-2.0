let nav_items = document.getElementsByClassName('p');
for(let i = 0; i < nav_items.length; i++){
    nav_items[i].addEventListener('click',function(){
document.getElementById('check').checked = false;
    })
}