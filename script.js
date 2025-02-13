

const newsContainer = document.getElementById("newscontainer");


async function fetchRandomNews(){
    try{
        const response = await fetch("http://localhost:5000/news");
        const data = await response.json();
        return data.articles;
    } catch(error){
        console.error("Error fetching random news", error);
        return [];
    }
}

function displayBlogs(articles){
    newsContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement
        ("div");
        blogCard.classList.add("card");
        const img = document.createElement
        ("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h1");
        title.textContent = article.title;
        const description = document.createElement
        ("p");
        description.textContent = article.description;


        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        newsContainer.appendChild(blogCard)
    }

    )
}


(async ()=>{
    try{
      const articles =  await fetchRandomNews();
      displayBlogs (articles);
    }catch(error){
        console.error("Error fetching random news", error);
    }
})();