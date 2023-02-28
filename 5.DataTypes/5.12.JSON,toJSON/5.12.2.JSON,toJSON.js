"use strict";

// исключить обратные ссылки

let room = {
    Number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console(JSON.stringify(meetup, function replacer (key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
