interface Contact {
    id: number;
    name: string;
}

interface userContact extends Contact {
    username: string;
}
function clone<T>(source: T): T {
    return Object.apply({}, source);
}

function convert<T1,T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)

const dateRange = {
    startDate: Date.now(),
    endDate: Date.now() + 1000 * 60 * 60 * 24 * 7
}

const dateRangeCopy = clone(dateRange);