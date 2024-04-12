//'https://random.imagecdn.app/v1/image?width=600&height=400' api link

//access dom
let mainContainer = document.getElementById('main')
let button = document.getElementById('img')


let isFetching = false;
async function fetchImage(){
    if(isFetching) return;

    isFetching = true;

    try{
        let response = await fetch('https://random.imagecdn.app/v1/image?width=600&height=400');
        let imageLink = await response.url
        addImage(imageLink)
        // console.log(response.url)
    } catch(error){
        console.error('error occured while fetching', error)
    } finally{
        isFetching = false;
    }
    
}






function addImage(imageLink){
    let imageContainer = document.createElement('div');

    let image = document.createElement('img')
    image.style.height = '400px'
    image.style.width = '600px'
    image.setAttribute('src', imageLink)
    

    mainContainer.append(imageContainer)
    imageContainer.append(image)
}

function getScroll(){
    let totalHeight = window.innerHeight + window.scrollY;
    let pageHeight = document.documentElement.scrollHeight;

    if(totalHeight - pageHeight <= 100){
        fetchImage();
    }
}

window.addEventListener('scroll', getScroll);


window.onload = fetchImage;




