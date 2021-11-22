
const all = {
  icon : ['xbox', 'apple', 'peace', 'telegram'],
  number : [1, 2, 3 , 4],
  iconClass : ['bi bi-xbox', 'bi bi-apple', 'bi bi-peace', 'bi bi-telegram'],
  total : ['x&1','x&2','x&3','x&4','a&1','a&2','a&3','a&4','p&1','p&2','p&3','p&4','t&1','t&2','t&3','t&4','x&1','x&2','x&3','x&4','a&1','a&2','a&3','a&4','p&1','p&2','p&3','p&4','t&1','t&2','t&3','t&4']
}

let answer = [];
let firstClick = null;
let lock = true;
let playable = true;
let count = 0;
let tmp = '';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

window.onload = () => {
  reset();
  answer = shuffle(all.total);
}
// addCount();
// showUp(icon,id);
// clearOnclick(id,tmp);
// wrongAnswer(id);
function getthis(id){
  if(playable){
    let getValue = id.split('card');
    let icon = answer[getValue[1]-1];
    if(lock){
      showUp(icon,id);
      lock = false;
      firstClick = icon;
      tmp = id;
    }else{
      console.log(`${count} + ${tmp} + ${id} `);
      secondClick = icon;
      showUp(icon,id);
      addCount();
      playable = false;
      if(firstClick === secondClick && id != tmp){
        clearOnclick(id,tmp);
        tmp = '';
        setTimeout(() => {
          playable = true;
          lock = true;
        },1000);
      }else{
        setTimeout(() => {
          wrongAnswer(id);
          wrongAnswer(tmp);
          tmp = '';
        },500);
      }
      setTimeout(() => {
        playable = true;
        lock = true;
        firstClick = '';
        secondClick = '';
      },800);
    }
  }else{
    console.log('block');
  }
}

function showUp(icon,id){
  const elm = document.getElementById(id);
  elm.innerHTML = `
    <div class='show'>
    <div class='head ${getIconClass(icon)}'></div>
    <div class='number'>${getAnswerNumber(icon)}</div>
    <div class='foot ${getIconClass(icon)}'></div>
  </div>
  `;
}

function getIconClass(icon){
  const getValue = icon.split('&');
  let iconClass;
  if(getValue[0] === 'x'){
    iconClass = all.iconClass[0];
  }else if(getValue[0] === 'a'){
    iconClass = all.iconClass[1];
  }else if(getValue[0] === 'p'){
    iconClass = all.iconClass[2];
  }else if(getValue[0] === 't'){
    iconClass = all.iconClass[3];
  }
  return iconClass;
}

function getAnswerNumber(icon){
  const getValue = icon.split('&');
  let iconNumber = getValue[1];
  return iconNumber;
}

function reset(){
  const answerArea = document.getElementById('main');

  answerArea.innerHTML = `
  <div id="card1" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card2" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card3" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card4" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card5" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card6" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card7" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card8" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card9" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card10" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card11" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card12" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card13" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card14" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card15" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card16" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card17" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card18" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card19" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card20" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card21" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card22" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card23" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card24" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card25" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card26" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card27" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card28" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card29" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card30" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card31" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>
  <div id="card32" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>`;

  const title = document.getElementById('title');
  title.innerHTML= `<h1>神經衰弱 : 總共翻 0 次</h1>`;
  count = 0 ;
}

function wrongAnswer(id){
  const answerArea = document.getElementById(id);

  answerArea.innerHTML = `
  <div id="${id}" class="card" onClick="getthis(this.id)"><div class="question">?</div></div>`;

}

function clearOnclick(id,tmp){
  console.log(`${id} // ${tmp}`);
  document.getElementById(`${id}`).removeAttribute("onclick");
  document.getElementById(`${tmp}`).removeAttribute("onclick");
}

function addCount(){
  count = count + 1 ;
  const answerArea = document.getElementById('title');
  answerArea.innerHTML = `
  <h1>神經衰弱 : 總共翻 ${count} 次</h1>`;
}