<script lang="ts">
	import { onMount } from "svelte";
	import Todo from "../../components/Todo.svelte";

    let todoByDates = {};

    let todos = [{
        name: "Do laundry",
        description: "Flip the laundry",
        due: new Date(Date.now()),
        duration: 10,
        priority: 4,
        tags: ["PERSONAL"]
    }, {
        name: "Dont Do laundry",
        description: "Dont Flip the laundry",
        due: new Date(Date.now()),
        duration: 5,
        priority: 2,
        tags: ["PERSONAL"]
    }];

    onMount(() => {
        for (let todo of todos) {
            let dstring = new Date(todo.due).setHours(0, 0, 0, 0);
            if (dstring in todoByDates) {
                todoByDates[dstring].push(todo);
            } else {
                todoByDates[dstring] = [todo];
            }
        }
        
        console.log(todoByDates)
    })
    
</script>

<div class="flex flex-col justify-between h-screen w-screen">
    <div class="flex justify-between h-14 items-center"> 
        <div> Tasks </div>
        <button> + </button>
    </div>

    <div class="grow">
        {#each Object.keys(todoByDates).sort((a, b) => parseInt(b) - parseInt(a)) as date}
            {new Date(parseInt(date)).toString().slice(0, 15)}
            {#each todoByDates[date].sort((a, b) => a.priority - b.priority) as todo}
                <Todo todo={todo} />
            {/each}
        {/each}
    </div>
        
    <div class="flex justify-between h-14 items-center">
        <div>Tasks</div>
        <div>Microphone</div>
    </div>
</div>