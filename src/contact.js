const contactPage = () => {
    let createList = document.createElement('li');
    createList.setAttribute('class', 'tabs__item');
    let createA = document.createElement('a');
    createA.setAttribute('class', 'tabs__link');
    createA.textContent = "Contact Us!";
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
        pages[2].style.display = "block";
    }
    return createList;
}

const createContactInfo = () => {
    //create a simple contact me page
    let contact = document.createElement('div');
    contact.setAttribute('class', 'pageTabs');
    contact.textContent = "Please contact us for any questions!";
    //start form
    let textBox = document.createElement('form');
    textBox.setAttribute('class', 'contactForm');
    //email form
    let email = document.createElement('p');
    email.textContent = "Email";
    textBox.appendChild(email);
    let emailinput = document.createElement('input');
    textBox.appendChild(emailinput);
    //name form
    let name = document.createElement('p');
    name.textContent = "Name";
    textBox.appendChild(name);
    let firstlast = document.createElement('input');
    textBox.appendChild(firstlast);
    //contact text form
    let context = document.createElement('p');
    context.textContent = "How can we help!";
    textBox.appendChild(context);
    let contextinfo = document.createElement('input');
    contextinfo.setAttribute('class', 'context');
    textBox.appendChild(contextinfo);

    contact.append(textBox);
    //submit button
    let submit = document.createElement('button');
    submit.textContent = "Submit"
    contact.appendChild(submit);
    return contact;

}
export { contactPage, createContactInfo }