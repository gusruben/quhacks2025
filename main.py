import whisper 
import sounddevice as sd
import numpy as np
import wave
import re

def record_audio(filename, duration):
    fs =  44100
    print("Recording...")
    audio = sd.rec(int(duration * fs), samplerate = fs, channels = 1, dtype = 'int16')
    sd.wait()

    with wave.open(filename, 'wb') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(fs)
        wf.writeframes(audio.tobytes())