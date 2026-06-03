const containerEl = document.querySelector(".container");
const carrer = ["Web Developer", "Data Analyst", "Data Scientist"];

let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++
    containerEl.innerHTML = `
            <h1>I am a ${carrer[careerIndex].slice(0, characterIndex)}...</h1>
`;


if(characterIndex === carrer[careerIndex].length){
    careerIndex++
    characterIndex = 0
}
if(careerIndex === carrer.length){
    careerIndex = 0;
}

setTimeout(updateText,400); 

}

