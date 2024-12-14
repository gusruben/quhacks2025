<script lang="ts">
    export let todo;
</script>

<div class="flex-col w-full h-24 my-3 rounded-xl bg-[#2F2F2F80] backdrop-blur-xl p-4" style="box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset;">
    <div class="flex gap-4">
        <div class="w-6 h-6 mt-1 border-2 border-[#949494] rounded-full"></div>
        <div class="grow">
            <div class="text-lg font-normal">{todo.name}</div>
            <div class="text-xs font-light text-">{todo.description}</div>
            <div class="flex text-xs gap-3 mt-2 text-[#ABF3B9]">
                <div class="flex"><img class="mr-1" src="/date-icon.svg" alt="date">{todo.due.toUTCString().slice(0, 12)}</div>
                <div>{todo.duration} Minutes</div>
            </div>
        </div>
    </div>
</div>