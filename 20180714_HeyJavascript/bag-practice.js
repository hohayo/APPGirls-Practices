//var 是變數

//常數為const，變數為let，用來替換會一直重複使用的
const topic = 'My bag2' //const => 重覆應用
const topic_real = 'Welcome to ' + topic
const topic_real2 = topic + ' is very good!'
console.log(topic_real, topic_real2, topic)    //用逗點分隔，可以印在同一行
console.log(topic + ' cool~~~~')

//練習let
let apple = 5   // const為常數是不可變更的，若去變更會出錯
apple = 10
let answer = (apple + 3) * 2
// console.log('答案:' + answer)

//command是兩個斜線，程式碼不會讀取
// console.log('123')

//我的背包內容物
//矩陣，稱作array，長的是左右中括弧，裡面就是放一堆集合的東西
let myBag = ['蘋果','水梨','香蕉']  //駝峰式命名規則
console.log(myBag) 

//我的背包內容數量
//array的長度為length，.為執行甚麼function
let bagVol = myBag.length
// let bagvol =100
console.log('我的背包裡有 ', bagVol, ' 個物品', 100)

//拿出我的書包的特定物品
//讀取方式為後面中括弧+第幾個(第一個為0，第二個為1...)
let take = myBag[2] //如果不存在則會出現 undefined
console.log('我拿了 ',take)

//全部輪流拿出來
//forEach，矩陣的函數，前面的()的第一個代表了變數
//第二個代表索引(可不加)，都可自己命名
//後面的{}代表執行的內容
myBag.forEach((thing, index)=>{    //拿裡面的東西分別拿出來，index => 索引值
    console.log('這是第幾個迴圈', index)
    console.log('我拿出了', thing)
})

// myBag.forEach(()=>{})

//加上時間 new Date()
let nowTime = new Date()
console.log(nowTime)
myBag.forEach((thing)=>{
    let nowTime2 = new Date()
    console.log('我拿出了', thing, '在', nowTime2)  //如果nowTime用let，那後面是否可以一直改
})

//放進新的 push
myBag.push('鳳梨','水蜜桃','芭樂')  //不限1個，可以後面一直加
console.log(myBag)

//拿走不要的 splice
//第一個參數為起始位置，第二個參數為結束位置
//第三個為刪除後的新增內容(索引值為插入的索引值)
myBag.splice(1, 1, "啥米玩意兒")  //若應用在留言，刪除或是新增可以即時update，畫面就不會閃動
console.log(myBag)

//限定書包大小後，計算還剩多少空間
const limit = 10
let remainVol = limit - myBag.length
console.log('剩餘的背包數量: ' + remainVol)
console.log('')
//牛刀小試
//今天台北市長參選人為柯文哲，丁守中，姚文智
//1.請用程式碼加入一個新的參選人
//2.列出現在有幾位參選人
//3.每個候選人分別說出：「你好，我是ＸＸＸ，請投給我！」
//從let candidate = ["柯文哲","丁守中","姚文智"]開始

//在終端機中顯示===>
//現在參選人有4位，請他們發言：）
//你好，我是柯文哲，請投給我！
//你好，我是丁守中，請投給我！
//你好，我是姚文智，請投給我！
//你好，我是KAI，請投給我！
let candidates = ['柯文哲','丁守中','姚文智']
candidates.push('KAI','大嘴怪')
console.log('現在參選人有',candidates.length,'位，請他們發言 :)')
candidates.forEach((candidate)=>{
    console.log('你好，我是',candidate,'，請投給我！')  //用+或','有差異嗎？
})

//Object，也稱物件，外圍是大括弧，用來詳述事物
//跟array不同是它會放key和value（也就是欄位和值）
let newObject = {
    name: '蘋果',
    address: '高雄',
    count: 2,
    color: 'red',
}

console.log(newObject)

//Object可以直接讀取某個欄位
const thisAddress = newObject.address
const thisAddress2 = newObject['address']
console.log(thisAddress, thisAddress2)

//array裡也可以放Object（這就是JSON格式的組成！）
// let bag = ['蘋果','水梨','西瓜']
let newBag = [
    {
        name: '蘋果',
        address: '高雄',
        count: 2,
    },{
        name: '水梨',
        address: '台北',
        count: 1,
    },{
        name: '西瓜',
        address: '花蓮',
        count: 3,
    }]

console.log(newBag)



//複習：取array中的第一個，加上新觀念：抓取其中的address
console.log(newBag[1].address)

//複習：forEach的用法，加上object用法
newBag.forEach((fruit)=>{
    console.log(fruit.name,'的產地在',fruit.address)
})


//計算剩餘多少空間數量
const allVol = 10
let remainReal = allVol - newBag[0].count
- newBag[1].count
- newBag[2].count
console.log('剩餘真實數量:',remainReal)

//用forEach來解決
let allVol2 = 10 
newBag.forEach((fruit)=>{
    allVol2 = allVol2 - fruit.count
    // console.log('現在的allVol2:', allVol2)
    //前面的allVol2是一個容器，要裝新東西
    //後面的allVol2是上面定義的10
    // console.log('現在的allVol2:', allVol2)
})
console.log('最終的allVol2:',allVol2)


//牛刀小試
//1.請寫出一個自創的JSON的格式
//2.讀取任意欄位，顯示出來

let courses = [
    {
        name: 'Javascript'
    },{
        name: 'PHP'
    },{
        name: 'C'
    }]

console.log('今天要上的課程是', courses[0].name)
    

