interface Contact extends Address{
    name: string;
    email: string;
    dateOfBirth?: Date;
}

interface Address {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
}

let primaryContact: Contact = {
    name: 'Jamie Lannister',
    email: 'jamie@lannisters.com',
    line1: 'Casterly Rock',
    city: 'Casterly Rock',
    state: 'Westerlands',
    postalCode: '12345'
}