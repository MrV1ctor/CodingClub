fetch("https://club.rottinger.net/api/blogs")
.then((response) => response.json())
.then((blogs) => {
    
    for (let i = 0; i < blogs.length; i++)
    {
        let blogItem = document.createElement("div");
    
        let paragraph = blogs[i].title; 
        let title = document.createElement("h4");
        title.textContent = paragraph;
    
        blogItem.classList.add("blog-item");
    
        blogItem.appendChild(title);
        
    
        let description = document.createElement("p");
        description.textContent = blogs[i].description;
    
        blogItem.appendChild(description);
        
        document.getElementById("blog-table").appendChild(blogItem);
    }

})

