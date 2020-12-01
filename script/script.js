const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter, navHighlighterUs);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      if (sectionId == "nosotros" || sectionId == "galeria" || sectionId== "mapa")
    {
      document.querySelector("#nosotrosmenu").classList.add("active");
    } else {
    document.querySelector("#nosotrosmenu").classList.remove("active");
    }
      document.querySelector("#navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("#navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

function navHighlighterUs() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (sectionId == "mapa" || sectionId == "galeria" || sectionid == "nosotros")
    {
      sectionId="navbarDropdownMenuLink";
    }
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("#navbar a[id=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("#navbar a[id=" + sectionId + "]").classList.remove("active");
    }
  });
}


const URLData = 'https://aws.random.cat/meow';

function randomCat(){

    const data = fetch(URLData)
    .then(resp => resp.json())
    .then(data => {

        const info = data;

        console.log(info);

        const {file} = data;

        const cat = {file};

        return cat;

     

    })

    .catch(()=>{throw "hubo un error"});

   return data; 

}

 

async function random(event){

try{   
    const data = await randomCat();

    console.log(data.file)

    const file = data.file;

    console.log(file);

    const elemento = document.createElement('div');

    elemento.file = file;

    let capa = document.getElementById("cat");

    elemento.innerHTML = `<div> <br><h5>Meow</h5> <br><img src="${file}" style="width:auto; margin:auto; max-width:60%;max-height:60%" alt="Cat image"</div>`;

    

    capa.appendChild(elemento);

 

}

    catch(err){

        console.log("Hubo un error: ",err)
    }
  }
