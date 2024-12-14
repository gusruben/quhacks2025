
<script>
 // @ts-ignore
    export const CLIP_LEN = 60; //multiplied by MS_INTERVAL
    export const MS_INTERVAL = 1000;
    import { onMount } from 'svelte'
    let media = [];
    //debug text
    let text = "Recording";
    let mediaRecorder = null;
    function askPermission(){
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            // Initialize MediaRecorder
            mediaRecorder = new MediaRecorder(stream, {mimeType: "audio/webm"});
            mediaRecorder.ondataavailable = function(e){
                media.push(e.data);
                if(media.length > CLIP_LEN){
                    //delete first element
                    media.shift();
                }
                text = media.length.toString();
            }
            mediaRecorder.start(MS_INTERVAL);
        });
    }
    onMount(() => {
        askPermission();
    });
</script>

<div id="body-flex" class="flex flex-col gap-8 justify-center w-full h-full">

    <button id="mic-icon" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-48 h-48 bg-orange-400">
        
    </button>
    <div id="debug" class="text-2xl text-center">
        {text}
    </div>

    
</div>

<style>

</style>