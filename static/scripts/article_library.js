const ALL_ARTICLES = document.querySelectorAll(".library-article");

let last_target;
let status = false ;

for (let index = 0; index < ALL_ARTICLES.length; index++) {
    ALL_ARTICLES[index].addEventListener("mouseover", (e)=>{
        if(e.target.parentNode.className ===  "library-article" && status === false){
            last_target = e.target.parentNode.childNodes[3];
            last_target.style.display = "block";
            status = true;
        }
    })
    ALL_ARTICLES[index].addEventListener("mouseout", (e)=>{
        if(e.target.className != ""){
            console.log(e.target.className);
            status = false; 
            last_target.style.display = "none";
        }
    })
    
}