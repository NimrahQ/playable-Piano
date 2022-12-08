const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input ");

let allkeys = [], 
audio = new Audio('tunes/tunes/a.wav'); //by default audio is a

const playTune = (key)=>{
    audio.src =`tunes/tunes/${key}.wav`;//passing audio src based on key

    audio.play();
  

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //clicked key
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    //calling playtune function with passing datakeys value as an argument
    key.addEventListener('click',()=> playTune(key.dataset.key));
    // console.log(key.dataset.key);
    
});
const handleVolume = (e) =>{
    audio.volume = e.target.value; //passing the range value as audio volume
}

const showHideKeys =(e)=>{
    ///toggling hide class from each key on the checkbox
     pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey =(e)=>{
    if(allkeys.includes(e.key)) playTune(e.key);

}
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

keysCheckbox.addEventListener("click", showHideKeys);