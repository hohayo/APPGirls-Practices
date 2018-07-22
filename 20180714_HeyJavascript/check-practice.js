
// if else 判斷式
// if ( 條件 ) { 執行 } else { 執行 }
// 條件 == > < 
// () 放變數，條件及function的執行時使用
// {} => 放執行內容或物件
// [] => 放矩陣，拿出矩陣內容
//  . => 執行，或拿出某object欄位
const myName = '帥哥'

if (myName == '小黑') { //判斷到底是不是同名字串 
    console.log('答對了')
} else if (myName == '帥哥') {
    console.log('太見外了吧')
} else {
    console.log('答錯了')
}

if (3 < 5) {
    console.log('yes')
} else {
    console.log('no')
}

// for迴圈
// 第一個初始值，第二個結束條件，第三個中間流程
for (i = 0; i < 5; i++) { // i = i+1，初始值;符合條件
    console.log(i)
}

// for結合array
let myBag = ['蘋果', '水梨', '香蕉']
for (i = 0; i < myBag.length; i++) {
    console.log(i)
    console.log(myBag[i])
}

// 隨機 random
let randomNumber = Math.random()
console.log(randomNumber)

// 結合random和if else
if (randomNumber < 0.5) {
    console.log('今天運氣滿分')
} else {
    console.log('今天運氣很慘')
}

if (randomNumber < 0.25) {
    console.log('你是帥哥正妹')
} else if (randomNumber < 0.5){ //0.25到0.5之間
    console.log('你是普通人')
} else if (randomNumber < 0.75) { //0.5到0.75之間
    console.log('你不太帥不太正')
} else {
    console.log('不好說...')
}


// 實務：發票兌獎檢查
const prize = 36822639
const myReceipt = [12343221,36822639,56234123,21245212,36822639]

let n = 0

// 方法1： forEach
myReceipt.forEach((one)=>{
    if (one == prize) {
        console.log('恭禧你中一張獎')
        n = n + 1
    }
})
console.log('你總共中',n,'張')

// 方法2: for
for (i = 0; i < myReceipt.length; i++) {
    if (myReceipt[i] == prize) {
        console.log('恭禧你中一張獎')
    }
}

// 函數 function，()裡面是參數，命名叫什麼都可以，也可以不帶
// {}裡面為執行內容
// 之後要使用時，function_name()即可 
function myFunction(apple) {    //把某個東西代進這個函式使用，
    for (i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(apple)
}
myFunction()
myFunction('結束囉')
myFunction('大家好')

function myFunction2(name, age) {    //把某個東西代進這個函式使用，
    console.log('我的名字是：',name,'，我的年齡是',age) //若是字串則相連，若整數相加則會計算
}
myFunction2('KAI', 20)
myFunction2('小顆', 18)

// 定時 setTimeOut setinterval 
// 做一次 setTimeout( function(){ 執行 }, 毫秒 );
// 重複做 setinterval( function(){ 執行 }, 毫秒 );
// 中斷重複為ctrl+c
setTimeout(function() { //只作一次
    console.log('我列出來了')
}, 2000)    //1000毫秒=1秒

let n1 = 0;
setInterval(function() {    //重覆作
    n1 = n1 + 1
    console.log('每5秒來1次', n1)
}, 3000)

//牛刀小試
//1.利用random隨機產生一組數字
//2.利用if else來判斷<0.2就顯示中獎，其餘顯示沒中獎(中獎機率20%)。
//3-1.利用setInterval，每5秒開一次獎。
//3-2.利用for迴圈連續開三次。

function checkPrize() {
    let random = Math.random()
    console.log(random)
    if (random < 0.2) {
        console.log('恭禧你中獎了')
    } else {
        console.log('銘謝惠顧')
    }
}

// 3-1
let count = 0
setInterval(function(){
    console.log('現在開獎第',count++,'次')
    checkPrize()
}, 5000)

// 3-2
for (i = 0; i < 3; i++) {
    checkPrize()
}

for(i=0; i<3;i++) {
    checkPrize()
}

// node.js 可以裝很多套件，作很多功能