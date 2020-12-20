
let trivia = new Map()
trivia.set('Animal',['dog','cat','hors','bear','mouse'])
trivia.set('Computer',['macbook','lenovo','razer','dell','hp'])
trivia.set('Food',['pizza','falafel','pasta','injera','magloba'])
trivia.set('Geography',['ethiopia','israel','arizona','jordan','netherland'])
trivia.set('Movie',['tenet','Inception','matrix','interstellar','parasite'])

let question = new Map()
question.set("question",['q1','q2','q3','q4','q5'])

let conter = 0


for(const item of trivia.keys() ){
  mainDiv.innerHTML += `<div id = "${item}Id"  class ='categorbtn' style="font-weight: bolder;"
   onmouseover="keyValDisplay('${item}')">
   <h2 onclick="questionDisplay('${item}')">${item}</h2><div id="${item}Values" style="display:none"></div></div>`
   let myvalues = trivia.get(item)
   myvalues.forEach(element => {
      let categoryObjDiv =  document.getElementById(`${item}Values`)
       categoryObjDiv.innerHTML += `<h4>${element}</h4>`;
   });
   document.getElementById(`${item}Values`).innerHTML += `<span id="${item}question" style="display:none">${question.get('question')[conter]}</span>`
   conter++
    }

function keyValDisplay(key1) {
  for(const triviaKeyArray of trivia.keys()){
    document.getElementById(`${triviaKeyArray}Values`).style.display = "none"
  }
  let categoryObjDiv =  document.getElementById(`${key1}Values`)
  categoryObjDiv.style.display = "block";
}

function questionDisplay(questionKey){
  for(const triviaKeyArray of trivia.keys()){
    document.getElementById(`${triviaKeyArray}question`).style.display = "none"
  }
  document.getElementById(`${questionKey}question`).style.display = "block"

}
    