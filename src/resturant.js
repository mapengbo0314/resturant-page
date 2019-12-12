import { homePage, createHomeInfo } from './home';
import { menuPage, createMenuPage } from './menu';
import { contactPage, createContactInfo } from './contact';
const resturant = () => {
    //creating the div for content
    let createTitle = document.getElementById('content');


    //creating the title page
    let createPage = document.createElement('div');
    createPage.setAttribute("id", "menu");

    //Creating the title Name
    let createHeader = document.createElement('h1');
    createHeader.setAttribute("class", "name");
    createHeader.textContent = "Authentic Chinese Food";
    createPage.appendChild(createHeader);

    //Creating home tabs
    let createTabs = document.createElement('ul');
    createTabs.setAttribute('class', 'tabs primary-nav');
    //create itemization for each tab
    createTabs.appendChild(homePage());
    createTabs.appendChild(menuPage());
    createTabs.appendChild(contactPage());
    //creating the menu headline
    createPage.appendChild(createTabs);
    //   createTabs.innerHTML = "<ul class='tabs primary-nav'><li class='tabs__item'><a class='tabs__link'>About Us</a></li><li class='tabs__item'><a class='tabs__link'>Menu</a></li><li class='tabs__item'><a class='tabs__link'>Contact Us!</a></li></ul>"


    createTitle.appendChild(createPage);
    //home page append so its after title and section
    createTitle.appendChild(createHomeInfo());//length index 0
    createTitle.appendChild(createMenuPage());//length index 1
    createTitle.appendChild(createContactInfo());//length index 2

}




//exporting functions we created
export { resturant };