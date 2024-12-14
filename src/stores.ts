import { writable } from 'svelte/store';

export const todos = writable(
    [{
        name: "Do laundry",
        description: "Flip the laundry",
        due: new Date(Date.now()),
        duration: 10,
        priority: 4,
        tags: ["PERSONAL"]
    }, {
        name: "Dont Do laundry",
        description: "Dont Flip the laundry",
        due: new Date(Date.now()-100000000),
        duration: 3,
        priority: 2,
        tags: ["PERSONAL"]
    }, {
        name: "Do laundry",
        description: "Flip the laundry",
        due: new Date(Date.now()),
        duration: 18,
        priority: 4,
        tags: ["PERSONAL"]
    }, {
        name: "Dont Do laundry",
        description: "Dont Flip the laundry",
        due: new Date(Date.now()-100000000),
        duration: 1,
        priority: 2,
        tags: ["PERSONAL"]
    }, {
        name: "Do laundry",
        description: "Flip the laundry",
        due: new Date(Date.now()),
        duration: 15,
        priority: 4,
        tags: ["PERSONAL"]
    }, {
        name: "Dont Do laundry",
        description: "Dont Flip the laundry",
        due: new Date(Date.now()-100000000),
        duration: 85,
        priority: 2,
        tags: ["PERSONAL"]
    }]
);