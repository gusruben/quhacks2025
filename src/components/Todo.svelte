<script lang="ts">
    let { onDelete, todo } = $props();
</script>

<div class="flex-col w-full h-24 my-3 rounded-xl bg-[#2F2F2F80] backdrop-blur-xl p-4" style="box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset;">
    <div class="flex gap-4">
        <div class="w-6 h-6 mt-1 border-2 border-[#949494] rounded-full" on:click={onDelete}></div>
        <div class="grow">
            <div class="text-lg font-normal">{todo.name}</div>
            <div class="text-xs font-light text-">{todo.description}</div>
            <div class="flex text-xs gap-2 mt-2 text-[#ABF3B9]" style="filter: drop-shadow(0px 0px 5px rgba(171, 243, 185, 0.40));">
                <div class="flex"><img class="mr-1" src="/date-icon.svg" alt="date">{todo.due.toUTCString().slice(0, 12)}</div>
                <div class="text-[#ebe96f]">{todo.duration} Minutes</div>
            </div>
        </div>
    </div>
</div>