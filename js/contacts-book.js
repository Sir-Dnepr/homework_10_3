"use strict";

const findByName = function (searchTermName) {
    return this.contacts.filter((contact) => {
        return contact.name.indexOf(searchTermName) !== -1;
    });
}

const addNewContact = function (name, phone, email) {
    this.contacts.push({
        'name': name,
        'phone': phone,
        'email': email
    });

    return this;
}

const book = {
    contacts: [
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
    ],
    findByName,
    addNewContact
};

let foundContacts = book.findByName('en');
console.log(foundContacts);

book.addNewContact('Lenon', '+380554444400', 'thereislenon@gmail.com');
foundContacts = book.findByName('en');

console.log(foundContacts);
