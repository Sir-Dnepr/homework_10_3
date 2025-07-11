"use strict";

const book = {
    'constacts': [
        {
            'name': 'Alex',
            'phone': '+380998877666',
            'email': 'someemail@gmail.com',
        },
        {
            'name': 'Helena',
            'phone': '+3806600011122',
            'email': 'newmail@gmail.com',
        },
        {
            'name': 'Olena',
            'phone': '+380550000022',
            'email': 'mariaspecoal@gmail.com',
        }
    ]
};

function findByName(searchTermName) {
    return this.constacts.filter((contact) => {
        return contact.name.indexOf(searchTermName) !== -1;
    });

}

function addNewContact(name, phone, email) {
    this.constacts.push({
        'name': name,
        'phone': phone,
        'email': email
    });

    return this;
}

let foundContacts = findByName.apply(book, ['en']);
console.log(foundContacts);

addNewContact.apply(book, ['Lenon', '+380554444400', 'thereislenon@gmail.com']);
foundContacts = findByName.apply(book, ['en']);
console.log(foundContacts);
