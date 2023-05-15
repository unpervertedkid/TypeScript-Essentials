interface Contact {
    id: number;
    name: string;
}

function clone(source: Contact) : Contact {
    return Object.apply({}, source);
}

let contact = {
    id: 1,
    name: 'John Doe'
};

let clonedContact = clone(contact);