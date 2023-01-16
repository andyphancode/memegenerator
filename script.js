const body = document.querySelector("body");
const imgLink = document.querySelector("#link");
const topText = document.querySelector("#toptext");
const bottomText = document.querySelector("#bottomtext");
const generate = document.querySelector("#generate");
const reset = document.querySelector("#reset");
const memeBox = document.querySelector("#memeBox");
const topFontSize = document.querySelector("#topfontsize");
const bottomFontSize = document.querySelector("#bottomfontsize");

generate.addEventListener('click', function(event){
    event.preventDefault();
    const newDiv = document.createElement("div");
    newDiv.classList.add("meme");
    const newImage = document.createElement("img");
    newImage.setAttribute("src",`${imgLink.value}`);

    const topmemetext = document.createElement("text");
    topmemetext.classList.add("toptext");
    topmemetext.innerText = `${topText.value}`;
    if(topFontSize.value != ""){
        topmemetext.style.fontSize = `${topFontSize.value}px`
    }
    

    const bottommemetext = document.createElement("text");
    bottommemetext.classList.add("bottomtext");
    bottommemetext.innerText = `${bottomText.value}`;
    if(bottomFontSize.value != ""){
        bottommemetext.style.fontSize = `${bottomFontSize.value}px`
    }


    newDiv.append(newImage);
    newDiv.append(topmemetext);
    newDiv.append(bottommemetext);


    memeBox.appendChild(newDiv);
})

reset.addEventListener('click', function(event){
    event.preventDefault();
    memeBox.innerHTML = '';
})