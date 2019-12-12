const menuPage = () => {
    let createList = document.createElement('li');
    createList.setAttribute('class', 'tabs__item');
    let createA = document.createElement('a');
    createA.setAttribute('class', 'tabs__link');
    createA.textContent = "Menu";
    createList.appendChild(createA);
    createList.addEventListener('click', function () {
        cardAppear();
    });
    const cardAppear = () => {
        //hides 
        var pages = document.querySelectorAll('.pageTabs');
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = "none"
        }
        pages[1].style.display = "block";
    }
    return createList;
}

const createMenuPage = () => {
    //create a menu page with 6 items, each contained in a card vertically going through the list 
    var menu = document.createElement('div');
    menu.setAttribute('class', 'pageTabs');
    menu.innerHTML = "Check out our menu <br>";
    let image = document.createElement('img');
    image.src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3010583704,3158884801&fm=26&gp=0.jpg"
    let image1 = document.createElement('img');
    image1.src = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1297736085,1155342939&fm=26&gp=0.jpg"
    menu.appendChild(image);
    menu.appendChild(image1);
    return menu;
}
export { menuPage, createMenuPage }