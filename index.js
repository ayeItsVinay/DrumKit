let drums = document.getElementsByClassName("drum");

for(i=0;i<drums.length;i++){
    drums[i].addEventListener("click", handleClick)
}

document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(e){
    makeSound(e.key)
    buttonAnimation(e.key)
}

function makeSound(key){
    switch(key){
        case "w":
            let tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break

        case "a":
            let tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break
        case "s":
            let tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            break
        case "d":
            let tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            break
        case "j":
            let snare = new Audio('./sounds/snare.mp3')
            snare.play()
            break
        case "k":
            let kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            break
        case "l":
            let crash = new Audio('./sounds/crash.mp3')
            crash.play()
            break
        default:
            console.log(key)
    }
}

function handleClick(){
    let buttonKey = this.innerHTML
    makeSound(buttonKey)
    buttonAnimation(buttonKey)
}

function buttonAnimation(key){
    let activeBtn = document.querySelector("."+key)
    activeBtn.classList.add("pressed")

    setTimeout(() => {
        activeBtn.classList.remove("pressed")
    }, 100);
}