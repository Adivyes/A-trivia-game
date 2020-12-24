
let trivia = new Map()
trivia.set('Animal', ['dog', 'cat', 'hors', 'bear', 'mouse'])
trivia.set('Computer', ['macbook', 'lenovo', 'razer', 'dell', 'hp'])
trivia.set('Food', ['pizza', 'falafel', 'pasta', 'injera', 'magloba'])
trivia.set('Geography', ['ethiopia', 'israel', 'arizona', 'jordan', 'netherland'])
trivia.set('Movie', ['tenet', 'Inception', 'matrix', 'interstellar', 'parasite'])

let question = new Map()
question.set("question", ['What animal has claws?', 'Well known for gamers is?', 'Goes well with with sigha is?', 'The hottest place is?', 'The best movie is?'])

let counter = 0


for (const item of trivia.keys()) {
  // יצרתי לולאה שרצה על כל הקיים של המפה טריוויה 
  //לאחר מכן צירפתי לכל קי מהמפה
  //י1- דיב שמכיל בתוכו פונקציית און-מאוס-אובר
  //י2- אייץ'-2 שמכיל את שם הקי ופונקציית און-קליק
  //י3- הוספתי גם דיב שיכיל בהמשך את הערכים של כל קי - דיב זה קיבל סטייל של דיספליי נאן 
  mainDiv.innerHTML += `<div id = "${item}Id"  class ='categorbtn' onmouseover="keyValDisplay('${item}')"> 
        <h2 class="keyCategor" onclick="questionDisplay('${item}')">${item}</h2>
        <div id="${item}Values" style="display:none"></div>
   </div>`

  let myvalues = trivia.get(item)

  myvalues.forEach(element => {

    let categoryObjDiv = document.getElementById(`${item}Values`)
    categoryObjDiv.innerHTML += `<h4 onclick="answerCheck('${element}','${item}')">${element}</h4>`;
  });
  document.getElementById(`${item}Values`).innerHTML += 
  `<span id="${item}question" style="display:none; font-weight: bolder">${question.get('question')[counter]}</span>`
  counter++
}
//עם פונקציי  הגיט משכנו את הערכים של כל קי מהמפה (כשהם בצורת מערך)ושייכנו אותם למשתנה "הערכים שלי"י
//על המשתנה "הערכים שלי" הפעלנו לולאת פור איץ' שהיא מכניסה כל ערך לתגית אייץ'-4 שכולם מוכנסים לקי שלהם (לדיב שייצרנו בהתחלה עם הסטייל של דיספליי נאן)
//תגית האייץ'-4 מכילה בתוכה פונקצייה של און-קליק שתאפשר לנו בהמשך לבחור תשובה בסוויץ' קייס
//ולבסוף יצרנו ספאן שיושב מתחת לכל דיב שמחזיק בתוכו שאלה
//גם הספאן קיבל סטייל של דיספליי נאן 



function keyValDisplay(key1) {
  for (const triviaKeyArray of trivia.keys()) {
    document.getElementById(`${triviaKeyArray}Values`).style.display = "none"
  }
  let categoryObjDiv = document.getElementById(`${key1}Values`)
  categoryObjDiv.style.display = "block";
}

function questionDisplay(questionKey) {
  for (const triviaKeyArray of trivia.keys()) {
    document.getElementById(`${triviaKeyArray}question`).style.display = "none"
  }
  document.getElementById(`${questionKey}question`).style.display = "block"

}

function answerCheck(values, keys) {
  switch (values) {
    case 'bear':

      return answerTrivia.innerHTML = 'You dare to pic bear. verey good!!'

    case 'razer':
      return answerTrivia.innerHTML = 'If you chose razer you are gamer. verey good!!'

    case 'injera':
      return answerTrivia.innerHTML = 'Food in computer memory I will take terra injera. verey good!!'

    case 'arizona':
      return answerTrivia.innerHTML = 'The whole point is to drink a Coca-Cola in the heart of Arizona. verey good!!'

    case 'parasite':
      return answerTrivia.innerHTML = 'All parasites live on stereotypes. verey good!!'

    default:
      return answerTrivia.innerHTML = 'You can keep trying!!'
  }
}