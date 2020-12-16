
let trivia = new Map()
trivia.set('animal',['dog','cat','hors','bear','mouse'])
trivia.set('computer',['macbook','lenovo','razer','dell','hp'])
trivia.set('Food',['pizza','falafel','pasta','injera','magloba'])
trivia.set('Geography',['ethiopia','israel','arizona','jordan','netherland'])
trivia.set('Movie',['tenet','Inception','matrix','interstellar','parasite'])


    for(const item of trivia.keys() ){
        mainDiv.innerHTML += `<button id = "${item}Id" onclick="categoryTopics('${item}')"  class ='btnCate'>${item}</button>`
    }
    let isclick = true;
    function categoryTopics(key){
        isclick = !isclick 
      let mishtane =  trivia.get(key)
      for (let i = 0; i < mishtane.length; i++) {
        document.getElementById(`${key}Id`).innerHTML += `${mishtane[i]} <br>`;
          
      }
        
        console.log(mishtane)
    }
    
   

