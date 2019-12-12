const homePage = () => {
    let createList = document.createElement('li');
    createList.setAttribute('class', 'tabs__item');
    let createA = document.createElement('a');
    createA.setAttribute('class', 'tabs__link');
    createA.textContent = "Home";
    createList.appendChild(createA);
    createList.addEventListener('click', function () {
        cardAppear();
    });
    const cardAppear = () => {
        var pages = document.querySelectorAll('.pageTabs');
        console.log(pages.length)
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = "none"
        }
        pages[0].style.display = "block";
    }



    return createList;
}
const createHomeInfo = () => {
    let homeInfo = document.createElement('div');
    homeInfo.setAttribute('class', 'pageTabs');
    homeInfo.textContent = "Can you resist the Peiking Duck?";
    let image = document.createElement('img');
    image.src = "https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/11/21/b681f60a-eca4-11e8-b0fe-c62dccd2d711_1280x720_192253.jpg?itok=J4vuxUug"
    homeInfo.appendChild(image);
    return homeInfo;
}


export { homePage, createHomeInfo }