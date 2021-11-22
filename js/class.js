const total = ['x&1','x&2','x&3','x&4','a&1','a&2','a&3','a&4','p&1','p&2','p&3','p&4','t&1','t&2','t&3','t&4','x&1','x&2','x&3','x&4','a&1','a&2','a&3','a&4','p&1','p&2','p&3','p&4','t&1','t&2','t&3','t&4'];
const icon = {
    class:['bi bi-apple','bi bi-xbox','bi bi-telegram','bi bi-peace'],
    firstWord:['a','x','t','p']
};
let tmp = '';

function shuffle(array_in) {
    let array = JSON.parse(JSON.stringify(array_in));

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class Game {
    constructor(initValue = [], initMark = []) {
        this.all = initValue;
        this.mark = initMark;
        this.count = 0;
        this.answer = [];
        this.doubleClick = true;
        this.firstAnswer = null;
    }

    //初始化
    init()  {
        // 計算翻牌次數
        this.count = 0;
        const getCountElm = document.getElementById('title');
        getCountElm.innerHTML = `<h1>神經衰弱 : 總共翻 ${this.count} 次</h1>`;

        //洗牌並重新整理畫面
        this.answer = shuffle(this.all);
        const getMainElm = document.getElementById('main');
        let str = '';
        let tmp = '';
        let num = 1;
        this.answer.forEach(item => {
            tmp = `
            <div id="card${num}" class="card" onClick="clickThis(this.id,'${item}')">
            <div class="question">?</div>
            </div>`;
            str = str + tmp;
            tmp = '';
            num++;
        })
        getMainElm.innerHTML = str;
    }

    //記數
    countUp() {
      this.count ++ ;
      const getElm = document.getElementById('title');

      getElm.innerHTML = `<h1>神經衰弱 : 總共翻 ${this.count} 次</h1>`;
    }

    //翻牌
    showCard(cardId,iconIndex,number)  {
        const getElm = document.getElementById(cardId);
        
        getElm.innerHTML = `
            <div class="show">
                <div class="head ${this.mark.class[iconIndex]}"></div>
                <div class="number">${number}</div>
                <div class="foot ${this.mark.class[iconIndex]}"></div>
            </div>
        `;
    }
    //轉回背面
    showQuestion(cardId1,cardId2)  {
      const getElm1 = document.getElementById(cardId1);
      const getElm2 = document.getElementById(cardId2);

      getElm1.innerHTML = `<div class="question">?</div>`;
      getElm2.innerHTML = `<div class="question">?</div>`;
    }
}

const game = new Game(total,icon);

//init
game.init();

function clickThis(cardId,answer) {
    const getValue = answer.split('&');
    const icon = getValue[0];
    const num = getValue[1];
    const getIconIndex = game.mark.firstWord.findIndex((item) => item === icon);
    if(game.doubleClick)  {
      if(game.firstAnswer === null) {
        game.showCard(cardId,getIconIndex,num);
        game.firstAnswer = answer;
        tmp = cardId;
      }else {
        game.countUp();
        game.doubleClick = false;
        if( game.firstAnswer === answer)  {
          game.showCard(cardId,getIconIndex,num);
          game.firstAnswer = null;
          game.doubleClick = true;
          tmp = '';
        }else {
          game.showCard(cardId,getIconIndex,num);
          game.firstAnswer = null;
          setTimeout(() => {
            game.showQuestion(cardId,tmp);
            game.doubleClick = true;
            tmp = '';
          },1000)
        }
      }
    }
}

function reset() {
  game.init();
}