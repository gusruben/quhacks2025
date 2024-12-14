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

<div class="flex flex-col justify-between h-screen w-screen bg-[#222] bg-pixel-pattern text-white">
    <div class="flex justify-between h-16 items-center"> 
        <div class="font-inter font-bold text-3xl m-6"> Tasks </div>
    </div>

    <div class="grow relative">
        {#each Object.keys(todoByDates).sort((a, b) => parseInt(b) - parseInt(a)) as date}
            {new Date(parseInt(date)).toString().slice(0, 15)}
            {#each todoByDates[date].sort((a, b) => a.priority - b.priority) as todo}
                <Todo todo={todo} />
            {/each}
        {/each}

        <!-- Didn't feel like looking up how to center ts so i jus added all the tags with the word center -->
        <div class="absolute right-4 bottom-4 w-12 h-12 text-center justify-center items-center content-center align-middle bg-[#3F3F3F80] backdrop-blur-3xl rounded-full" style="filter: drop-shadow(0px 0px 10px #FFFFFF1A); box-shadow: inset 0px 0px 10px #FFFFFF1A;"><span>+</span></div>
    </div>
        
    <div class="flex justify-between h-14 items-center">
        <div>Tasks</div>
        <div>Microphone</div>
    </div>
</div>