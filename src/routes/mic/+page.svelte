<script>
    // @ts-ignore
    export const CLIP_LEN = 60; // multiplied by MS_INTERVAL
    export const MS_INTERVAL = 1000;
    import { onMount } from 'svelte';
    let media = [];
    // debug text
    let text = "Recording";
    let mediaRecorder = null;

    function askPermission(){
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            // Initialize MediaRecorder
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = function(e){
                media.push(e.data);
                if(media.length > CLIP_LEN){
                    media.shift();
                }
                text = media.length.toString();
            }
            mediaRecorder.start(MS_INTERVAL);
        })
        .catch(err => {
            console.error("Error accessing media devices.", err);
            text = "Error accessing microphone";
        });
    }

    async function sendTestRequest(){
        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({test: "echoecho echo..."}),
            });
            let json = await response.json();
            alert(json.body.data);
        } catch (error) {
            console.error("Error sending test request:", error);
            alert("Failed to send test request.");
        }
    }

    function convertMediaToBase64(mediaArray) {
        const blob = new Blob(mediaArray, { type: 'audio/webm' });
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log("Initial result: " + reader.result);
                const base64data = reader.result.split(',')[1];
                resolve(base64data);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    async function testBase64(){
        try {
            const base64Data = await convertMediaToBase64(media);
            console.log("Base64 Data:", base64Data);

            const blob = new Blob([base64Data], { type: 'text/plain' });

            // temporary link element
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'base64.txt';

            document.body.appendChild(link);
            link.click();

            // clean up
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error("Error converting media to Base64 or downloading the file:", error);
        }
    }

    onMount(async () => {
        askPermission();
        let response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({transcription: "I have to do some math homework, today, by 12:00pm. Also, I think... I have to send in my math homework by next Tuesday."}),
        });
        console.log(response);
    });
</script>

<div id="body-flex" class="flex flex-col gap-8 justify-center w-full h-full">
    <button 
        id="mic-icon" 
        on:click={testBase64} 
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-48 h-48 bg-orange-400">
        Save Base64
    </button>
    <div id="debug" class="text-2xl text-center">
        {text}
    </div>
</div>

<style>
    /* Add any necessary styles here */
</style>
