import { writable } from 'svelte/store';

export const todos = writable(
    [{
        name: "Math homework",
        description: "Complete math homework",
        due: new Date(Date.now()),
        duration: 30,
        priority: 4,
        tags: ["PERSONAL"]
    }, {
        name: "Submit forms",
        description: "Submit forms one week from now",
        due: new Date(Date.now()+1000000000),
        duration: 10,
        priority: 2,
        tags: ["PERSONAL"]
    }
]);