let container = document.getElementById("Container");

const url = "https://dummyjson.com/products";

async function getData(){
    try{
        const  res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        appendData(data);
    }catch(err){
       console.log('error is',err);
    }
}

getData();

function appendData(data){
    console.log(data);
    data.products.forEach(function(el){
        const div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.images[0];
        let title = document.createElement("h2");
        title.innerText = el.title;
        let description = document.createElement("p");
        description.innerText = `Description: ${el.description}`;
        let category = document.createElement("h3");
        category.innerText = `Category: ${el.category}`;
        let price = document.createElement('h1');
        price.innerText = `Price: ${el.price}`;
        div.append(img,title,category,description,price);
        container.append(div);
    })
}