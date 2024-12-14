<script lang="ts">
	import { onMount } from "svelte";
	import Todo from "../../components/Todo.svelte";
    import { todos } from "../../stores";

    let todoByDates = {};

    const finishTodo = (todo) => {
        $todos.splice($todos.indexOf(todo), 1)
        updateTodos();
    };

    const updateTodos = () => {
        todoByDates = {};

        for (let todo of $todos) {
            let dstring = new Date(todo.due).setHours(0, 0, 0, 0);
            if (dstring in todoByDates) {
                todoByDates[dstring].push(todo);
            } else {
                todoByDates[dstring] = [todo];
            }
        }

        todoByDates = todoByDates;
    }

    onMount(() => {
        updateTodos();
    })
    
</script>

<div class="flex flex-col justify-between h-screen w-screen bg-[#222] bg-pixel-pattern text-white font-inter">
    <div class="grow relative items-center flex flex-col px-8 overflow-y-scroll">
        <div class="flex justify-between h-16 self-start"> 
            <div class="font-inter font-bold text-4xl my-6 "> Tasks </div>
        </div>

        {#each Object.keys(todoByDates).sort((a, b) => parseInt(a) - parseInt(b)) as date}
            <div class="font-inter text-xl font-bold w-full flex flex-col pt-8 pb-3">
                <span>{new Date(parseInt(date)).toString().slice(0, 3)}</span>
                <div class="w-full h-1 rounded-full" style="background: linear-gradient(90deg, #808080 0%, #4A4A4A 100%); box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25);"></div>
            </div>
            {#each todoByDates[date].sort((a, b) => a.priority - b.priority) as todo}
                <Todo onDelete={() => {finishTodo(todo)}} todo={todo} />
            {/each}
        {/each}

        <div class="w-full mt-28"></div>

        <!-- Please ignore this -->
        <div class="fixed right-4 bottom-28 w-16 h-16 flex justify-center items-center bg-[#3F3F3F80] backdrop-blur-3xl rounded-full" style="fill: radial-gradient(92.33% 172.67% at 49.74% 142%, rgba(122, 122, 122, 0.70) 0%, rgba(102, 102, 102, 0.00) 77.45%), rgba(77, 77, 77, 0.50); box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset; filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.30)); backdrop-filter: blur(25px);"><img class="w-6 h-6" src="/plus-icon.svg" alt="new todo icon"/></div>
    </div>
        
    <div class="absolute bottom-0 right-0 w-full flex justify-between h-24 items-center p-2 gap-2">
        <div class="bg-[#3F3F3F80] w-full h-full backdrop-blur-3xl rounded-lg text-center flex flex-col items-center justify-center font-light" style="box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.08), 0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset; background: radial-gradient(92.33% 172.67% at 49.74% 142%, rgba(160, 160, 160, 0.70) 0%, rgba(102, 102, 102, 0.00) 77.45%), rgba(63, 63, 63, 0.50);">
            <img src="/michaelphone.svg" alt="microphone" />
            <div>Tasks</div>
        </div>
        <div class="bg-[#3F3F3F80] w-full h-full backdrop-blur-3xl rounded-lg text-center flex flex-col items-center justify-center font-light" style="box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.08), 0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset;">
            <img src="/michaelphone.svg" alt="microphone" />
            <div>Microphone</div>
        </div>
    </div>
</div>