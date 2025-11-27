const textInput=document.getElementById("textInput");
const wordLeft=document.getElementById("wordLeft");
const MAX_WORDS=100;
textInput.addEventListener("input",()=>{
    let len=textInput.value.length;
    let words=len>MAX_WORDS?0:MAX_WORDS-len;
    wordLeft.innerText=words;
     if (words > 50) {
    wordLeft.style.color = "green";
  } else if (words > 20){
    wordLeft.style.color = "orange";
  } else {
    wordLeft.style.color = "red";
  }
    
});