let destination =document.querySelector('.destination')
let nextBtn=document.querySelector('.next')
let prevBtn=document.querySelector('.prev')

let BgImgs=[
    '../images/Destinations/kedarnath-temple.webp',
    '../images/Destinations/azhimala.webp',
    '../images/Destinations/marinaBeach.jpg',
    '../images/Destinations/meghalaya.jpg',
    '../images/Destinations/rameshwaram.jpeg',
]

let currentBgImgIndex=0

function addBg(){
    destination.style.backgroundImage=`url(${BgImgs[currentBgImgIndex]})`
}

nextBtn.addEventListener('click',function(){
    currentBgImgIndex++
    if (currentBgImgIndex == BgImgs.length) {
        currentBgImgIndex = 0
    }
    addBg()
})
prevBtn.addEventListener('click',function(){
    if(currentBgImgIndex == 0) {
        currentBgImgIndex = BgImgs.length
    }
    currentBgImgIndex--
    addBg()
})
