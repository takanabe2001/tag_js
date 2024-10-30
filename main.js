let img;
let video
let isPlaying = false
let fr = 10;
let firstFileName
let fileName
let userName 
let end_f = false
let r
let g
let b
let rgb
const canvasWidth = 800
const canvasHeight = 800
const tagSqHeight = 800
const tagSqWidth = 800
const kanzyouWidth = 80
const kanzyouHeight = 40 

function preload() {
    img = loadImage("./img/new_sq.png")
   
    img_kouhuku = loadImage("./img/kouhuku.png")
    img_akarui = loadImage("./img/akarui.png")
    img_kouhun = loadImage("./img/kouhun.png")
    img_odoroki = loadImage("./img/odoroki.png")

    img_keikai = loadImage("./img/keikai.png")
    img_osore = loadImage("./img/osore.png")
    img_nayami = loadImage("./img/nayami.png")
    img_huyukai = loadImage("./img/huyukai.png")

    img_yokuatu = loadImage("./img/yokuatu.png")
    img_yuuutu = loadImage("./img/yuuutu.png")
    img_taikutu = loadImage("./img/taikutu.png")
    img_tukare = loadImage("./img/tukare.png")

    img_nemuke = loadImage("./img/nemuke.png")
    img_rirakkusu = loadImage("./img/rirakkusu.png")
    img_kiraku = loadImage("./img/kiraku.png")
    img_manzoku = loadImage("./img/manzoku.png")
    
}

function setup() {
    const canvas = document.getElementById("canvas")
    createCanvas(canvasWidth, canvasHeight,canvas);
    image(img, 0, 0, tagSqWidth, tagSqHeight);
    frameRate(fr)
    userName = window.prompt("ユーザー名を入力してください", "");
    alert("感情円の中心にカーソルを持っていき、左クリックをしてください。\n動画の一時停止・再生は左クリックです。")
}


const mouseData = {}
let count = 0
function draw() {
    let currentTime = 0
    if (video?.currentTime) {
        currentTime = video.currentTime
    }

    x = mouseX - canvasWidth / 2
    y = -(mouseY - canvasHeight / 2)

    // console.log(x,y)
    //image(img, 0, 0,tagSqWidth, tagSqHeight);
    if(x == 0){
        if(y > 0)tan = 10000;
        else tan = -10000; 
    }else{
        tan = y/x
    }
    if((x**2 + y**2) < 10000){
        image(img, 0, 0,tagSqWidth, tagSqHeight);
    }
    else if(x > 0){
        if(y > 0){
            if(tan<0.4142)image(img_kouhuku, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan<1)image(img_akarui, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan<2.41)image(img_kouhun, 0, 0,tagSqWidth, tagSqHeight);
            else image(img_odoroki, 0, 0,tagSqWidth, tagSqHeight);
        }else{
            if(tan>-0.4142)image(img_manzoku, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan>-1)image(img_kiraku, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan>-2.41)image(img_rirakkusu, 0, 0,tagSqWidth, tagSqHeight);
            else image(img_nemuke, 0, 0,tagSqWidth, tagSqHeight);
        }
    }else{
        if(y > 0){
            if(tan>-0.4142)image(img_huyukai, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan>-1)image(img_nayami, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan>-2.41)image(img_osore, 0, 0,tagSqWidth, tagSqHeight);
            else image(img_keikai, 0, 0,tagSqWidth, tagSqHeight);
        }else{
            if(tan<0.4142)image(img_yokuatu, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan<1)image(img_yuuutu, 0, 0,tagSqWidth, tagSqHeight);
            else if(tan<2.41)image(img_taikutu, 0, 0,tagSqWidth, tagSqHeight);
            else image(img_tukare, 0, 0,tagSqWidth, tagSqHeight);
       }
    }
    
    const mouseFill = document.getElementById("canvas");  //colorful pointer
    const ctx = mouseFill.getContext("2d");
    // r = 255 - Math.floor((mouseY - 130) / 2.173) + Math.floor((mouseX - 130) / (2.173 * 2))
    // if(r>255)r=255;
    // g = Math.floor((mouseY - 130) / 2.173) + Math.floor((mouseX - 130) / (2.173 * 2))
    // if(g>255)g=255;
    // b = 200 - Math.floor((mouseX - 130) / 2.173)
    // if(b < 0)b=0;

    if ((count + 1) % 10 == 0 && isPlaying) {
        mouseData[`${Math.floor(currentTime)}`] = [mouseX - canvasWidth / 2, -(mouseY - canvasHeight / 2), currentTime]
        console.log(video.currentTime,mouseData)
    }

    if (isPlaying) {
        count++;
        // ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
        ctx.fillStyle = 'rgb(255,0,0)';
    } else {
        ctx.fillStyle = 'rgb(0,0,0)';
    }
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
    ctx.fill();   

    if (end_f) {
        video.pause()
    }
}

function mouseClicked() {
    if (end_f == false && 0 <= mouseX && mouseX <= canvasWidth && 0 <= mouseY && mouseY <= canvasHeight) {
        if (isPlaying) {
            video.pause()
        } else {
            video.play()
        }
    }
}

window.onload = () => {
    // const button = document.getElementById("dl-button")
    // button.addEventListener('click', () => {
    //     const keys = Object.keys(mouseData)
    //     outputData = []
    //     keys.map(key => {
    //         outputData.push(mouseData[key])
    //     })
    //     downloadCsv(outputData)
    // })

    video = document.getElementById("test-video");
    console.log(video)
    let path = video.src
    firstFileName = path.match(/([^/]*)\.mp4/)[1];

    video.addEventListener('play', () => {
        isPlaying = true
        console.log('play')
        // console.log("ファイル名" + firstFileName)
        // console.log("realファイル名" + fileName)
        if (fileName == null){
            fileName = firstFileName
        }
        console.log("動画ファイル名" + fileName)
    })

    video.addEventListener('pause', () => {
        isPlaying = false
    })
    video.addEventListener('ended', () => {
        isPlaying = false
        end_f = true
        var result = confirm('結果を保存 : OK\n手直ししたい : キャンセル');
        if (result){
            const keys = Object.keys(mouseData)
            outputData = []
            keys.map(key => {
            outputData.push(mouseData[key])
            delete mouseData[key]
            })
            downloadCsv(outputData)
            end_f = true
            alert("次の動画を選択してください")
        } else {
            isPlaying = false
            end_f = false
        }
    })
}


function previewFile(hoge) {
    if (isPlaying) {
        return
    }
    const fileData = new FileReader();
    fileData.onload = (function () {
        //id属性が付与されているimgタグのsrc属性に、fileReaderで取得した値の結果を入力することで
        //プレビュー表示している
        video.src = fileData.result;
    });
    fileData.readAsDataURL(hoge.files[0]);
    let newfile = hoge.files[0].name
    fileName = newfile.replace(".mp4", "");
    end_f = false
    count = 0;
}


