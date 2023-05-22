   const kaijiQuiz = [
      {
        question: 'カイジに登場する「一条」が地下行きとなった年数は次のうちどれ？',
        answers: ['1000年', '1050年', '1100年', '1150年'],
        collect: '1050年'
      },
      {
        question: 'カイジ「限定じゃんけん」に登場する「ハイエナ野郎」の名前は次のうちどれ？',
        answers: ['北見', '安藤', '杉田', '船井'],
        collect: '杉田'
      },
      {
        question: 'カイジが美心とデートに訪れた公園は次のうちどれ？',
        answers: ['昭和記念公園', 'アンデルセン公園', '水元公園', '葛西臨海公園'],
        collect: '昭和記念公園'
      },
      {
        question: '班長大槻の下の名前は次のうちどれ？',
        answers: ['一郎', '太郎', '次郎', '誠一'],
        collect: '太郎'
      },
      {
        question: 'カイジに登場する「一条」を馬鹿にしていないクラスメイトは次のうちどれ？',
        answers: ['関谷', '石川', '青木', '浅田'],
        collect: '青木'
      }
    ];

    const question = kaijiQuiz.question;
    const answers = kaijiQuiz.answers;
    const collect = kaijiQuiz.collect;
  
    const quizLength = kaijiQuiz.length;
    //現在の問題数
    let quizIndex = 0;
    //スコアの初期値
    let score = 0;  

    const $button = document.getElementsByClassName('quiz-button');
    const buttonLength = $button.length;
    
    //定数の文字列をHTMLに反映させる
    document.getElementById('js-kaiji-question').textContent = question;
    $button.textContent = answers;

    //質問の番号を定義
    const $questionNumber = document.getElementsByClassName('quiz-question-number')[quizIndex];

  

    const setupQuiz = () =>{
        document.getElementById('js-kaiji-question').textContent = kaijiQuiz[quizIndex].question;
        
        let buttonIndex = 0;
        while(buttonIndex < buttonLength){
          $button[buttonIndex].textContent = kaijiQuiz[quizIndex].answers[buttonIndex];
          buttonIndex++;
        }

        //質問の番号を変える
        let questionNumber = quizIndex + 1;
        $questionNumber.textContent = 'ざわざわクイズ' + '   ' + questionNumber + '問';
    }
    //最初の問題を表示
    setupQuiz();

    //動画を定義
    const $video = document.getElementById("js-video");

    //finish時のclass読み込み
    const $finish = document.getElementById("js-finish");

//     //ボタンをクリックしたら正誤判定
//     const clickHandler = (e) =>{
      
//     if( kaijiQuiz[quizIndex].collect === e.target.textContent){
//       //  $video.style.display = 'block'
//         window.alert('正解！');
//         score++;

//     }else{
//         window.alert('不正解！');

//     }
//     quizIndex++;
//     if(quizIndex < quizLength){
//         //問題があれば実行
//         setupQuiz();
//     }else{
//         $finish.classList.add("is-show");
//         //問題がなければ実行
//         window.alert('終了！あなたの正解数は' + score +'/' +quizLength + 'です！');
//     }
// };


    const clickHandler = (e) =>{
      // ボタンをクリックしたら2秒間動画を再生
      $video.style.display = 'block';
      setTimeout(() => {
        $video.style.display = 'none';

        //ボタンをクリックしたら正誤判定
        if( kaijiQuiz[quizIndex].collect === e.target.textContent){
          window.alert('正解！');
          // $quizAnswer.classList.add("checked", "is-correct");
          score++;

        } else {
          window.alert('不正解！');
        }

        quizIndex++;
        if(quizIndex < quizLength){
          setupQuiz();
        } else {
          $finish.style.display = 'flex'
          // window.alert('終了！あなたの正解数は' + score +'/' +quizLength + 'です！');
          document.getElementsByClassName('score')[0].textContent = score;
        }
      }, 1000);
    };

    let handlerIndex = 0;
    while(handlerIndex < buttonLength){
        $button[handlerIndex].addEventListener('click',(e) =>{
            clickHandler(e);
        });
        handlerIndex++;
    }

