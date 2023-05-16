type ContactName = string;

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

type contactBirthDate = Date | string | number;
type contactStatus = "active" | "inactive" | "new";

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: contactBirthDate;
    status?: contactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

type AddressableContact = Contact & { address: Address };

let addressableContact: AddressableContact = {
    id: 12345,
    name: "Jamie Johnson",
    address: {
        line1: "123 Fake Street",
        line2: "Apt 6",
        province: "BC",
        region: "Vancouver",
        postalCode: "V5G 1G1"
    }
}

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

