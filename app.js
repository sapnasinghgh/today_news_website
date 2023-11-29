const api_key ="92a7cb82031040fcba446a351e1672f5"
 const url ="https://newsapi.org/v2/everything?q"
 const carddata = document.querySelector(".carddata")
const searchbtn = document.querySelector("#searchbtn")
const inputdata = document.querySelector(".searchip")
const type = document.querySelector(".searchtype")


 const getdata = async (input)=>{
    const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apikey=${api_key}`);
    const data = await res.json();
    console.log(data);
    console.log(data.articles[0].title);
    console.log(data.articles[0].urlToImage);

    type.innerHTML = "Search :" + input;
    inputdata.value =""
    carddata.innerHTML = "";
    data.articles.forEach( (article)=> {
        console.log(article);

    const divs = document.createElement("div")
    divs.classList.add("card")
    carddata.appendChild(app.js/divs)

    divs.innerHTML = `
     <img src="${article.urlToImage}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description}</p>`
        console.log("ennnnddddddddddd");

       divs.addEventListener("click",()=>{
        window.open(article.url)
       })

    });


}


window.addEventListener("load" , ()=>{
     getdata("india")
})


searchbtn.addEventListener("click",function(){
    let inputtext = inputdata.value
    getdata(inputtext)
})


function  navele(navitem){
    if(navitem=="sports"){
        document.querySelector("#sports").style.color = "red"
        document.querySelector("#finance").style.color = "black"
        document.querySelector("#politics").style.color = "black"
        document.querySelector("#technology").style.color = "black"


    }

     if(navitem=="finance"){
        document.querySelector("#sports").style.color = "black"
        document.querySelector("#finance").style.color = "red"
        document.querySelector("#politics").style.color = "black"
        document.querySelector("#technology").style.color = "black"


    }

     if(navitem=="politics"){
        document.querySelector("#sports").style.color = "black"
        document.querySelector("#finance").style.color = "black"
        document.querySelector("#politics").style.color = "red"
        document.querySelector("#technology").style.color = "black"


    }

      if(navitem=="technology"){
        document.querySelector("#sports").style.color = "black"
        document.querySelector("#finance").style.color = "black"
        document.querySelector("#politics").style.color = "black"
        document.querySelector("#technology").style.color = "red"


    }

    
  
    getdata(navitem)
}


