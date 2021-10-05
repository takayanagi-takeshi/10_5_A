// 9月24日からの続き

// ターゲットを変数animaTargetsに代入（ここでは３つ）
let animeTargets = document.querySelectorAll('.animate__animated');
// console.log(animeTarget);

window.addEventListener('scroll', () => {
  for (let i = 0; i < animeTargets.length; i++) {
    // ターゲットのTOPの座標（スクロールしていくと０に近づく）
    const animeTarget = animeTargets[i].getBoundingClientRect().top;
    // console.log(animeTarget)
    // スクロール中の座標
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(animeTarget)
        // windowのTOPからのターゲットまでの実際の距離
        let offset = animeTarget + scroll;
        // 現在開いているブラウザのドキュメントウインドウの高さ
        let windowHeight = window.innerHeight;
        //ターゲットのアニメーションの種類をdata-animationから取得して変数animeに代入
        let anime = animeTargets[i];
  }
})
// window.addEventListener('scroll', () => {
// let scroll = window.pageYOffset || document.documentElement.scrollTop;
// console.log(scroll);
// });