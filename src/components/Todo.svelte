<script lang="ts">
    export let todo;
</script>

<div class="flex-col outline">
    <h2>{todo.name}</h2>
    <p>{todo.description}</p>
    <p>Due: {todo.due.toUTCString()}</p>
    <p>Duration: {todo.duration} Minutes</p>
    <p>Priority: {todo.priority}</p>
    <p>
        Tags: 
        {#each todo.tags as tag}
            #{tag}
        {/each}
    </p>
</div>