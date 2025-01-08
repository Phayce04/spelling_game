//random generate words from npm
import { generate, count } from "random-words";

const wordArray=generate({exactly:10, minLength: 7,maxLength:10})

function misspell(word){
const rand=Math.floor(Math.random()*5)
switch (rand){
  case 1:
    return letterSwitch(word)
  case 2:
    return letterDelete(word)
  case 3:
    return doubleLetter(word)
  case 4:
  return consecutiveLetter(word)
  case 5:
    addLetterH(word)
  default:
    return word

}}


// introduce mispellings 
function letterSwitch(word){
  const index= Math.floor(Math.random()*(word.length-1))
  const wordArray=word.split("");
  const temp=wordArray[index]
  wordArray[index]=wordArray[index+1]
  wordArray[index+1]=temp
  return wordArray.join("");
}
//delete random letter
function letterDelete(word){
  const index= Math.floor(Math.random()*(word.length-1))

  return word.slice(0,index-1)+word.slice(index)
}
// remove the first instance of double letter
function doubleLetter(word){
  const wordArray=word.split("");
  let wordObj={}
  let mispelledWord=word
  wordArray.forEach((element,index) => {
    if(wordObj[element]){
       mispelledWord=(wordArray.slice(0,index).concat(wordArray.slice(index+1)).join(''))
    }
    else{
      wordObj[element]=[]
    }
  });
  return mispelledWord
}
// remove the first consecutive letters
function consecutiveLetter(word){
  const wordArray=word.split("");
  let letter=wordArray[0]
  let wordArrayCopy=wordArray
  for(let i=1;i<wordArray.length; i++){
    if(wordArray[i]===letter){
       return wordArrayCopy=(wordArray.slice(0,i).concat(wordArray.slice(i+1)).join(''))
    }
    else{
      letter=wordArray[i]
    }
    letter=wordArray[i]
  }
  return word
}


function addLetterH(word){
  const index= Math.floor(Math.random()*(word.length-1))

return word.slice(0,index)+"h"+word.slice(index)
}




//random mispellings to the word abd store both in object
  const words=wordArray.map((element)=>{
    let mispelled=misspell(element)
    while (mispelled===element){
      mispelled=misspell(element)
    }
    return { misspelled: mispelled, correct: element }
  })


//export

export default words



//make o into ou
// make o to u
//make f to p
//make c to k