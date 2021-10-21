const ALL_ARTICLES = document.querySelectorAll(".article");

let image = ``;
let last_opened_id = -1;
for (let index = 0; index < ALL_ARTICLES.length; index++) {
    ALL_ARTICLES[index].addEventListener("mouseover", (e)=>{
        if(last_opened_id === -1){
            last_opened_id = index;
            image = ALL_ARTICLES[index].innerHTML;
            ALL_ARTICLES[index].innerHTML += `<div style="position: absolute;   transform: translate(-0%, -102.5%); background-color: black; width: 400px; height: 170px;"></div>`; 
        }
    })
    
}


for (let index = 0; index < ALL_ARTICLES.length; index++) {
    ALL_ARTICLES[index].addEventListener("mouseout", (e)=>{
        console.log("out");
        if(index === last_opened_id){
            ALL_ARTICLES[index].innerHTML = image;
            last_opened_id = -1;
        }
    })
    
}