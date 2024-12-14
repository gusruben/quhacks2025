<script>
    export let page;
</script> 

<div class="absolute bottom-0 right-0 w-full flex justify-between h-24 items-center p-2 gap-2">
    <div class="bg-[#3F3F3F80] w-full h-full backdrop-blur-3xl rounded-lg text-center flex flex-col items-center justify-center font-light" style="box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.08), 0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset; {page ? "background: radial-gradient(92.33% 172.67% at 49.74% 142%, rgba(160, 160, 160, 0.70) 0%, rgba(102, 102, 102, 0.00) 77.45%), rgba(63, 63, 63, 0.50);" : ""}">
        <img src="/michaelphone.svg" alt="microphone" />
        <div>Tasks</div>
    </div>
    <div class="bg-[#3F3F3F80] w-full h-full backdrop-blur-3xl rounded-lg text-center flex flex-col items-center justify-center font-light" style="box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.08), 0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset; {!page ? "background: radial-gradient(92.33% 172.67% at 49.74% 142%, rgba(160, 160, 160, 0.70) 0%, rgba(102, 102, 102, 0.00) 77.45%), rgba(63, 63, 63, 0.50);" : ""}">
        <img src="/michaelphone.svg" alt="microphone" />
        <div>Microphone</div>
    </div>
</div>