fetch("https://club.rottinger.net/api/blogs")
.then((response) => response.json())
.then((blogs) => {

    let url = window.location.href;


    if (url.indexOf("?blog=")==-1)
    {
        for (let i = 0; i < blogs.length; i++)
        {
            let blogItem = document.createElement("div");
        
            let paragraph = blogs[i].title; 
            let title = document.createElement("h4");
            title.textContent = paragraph;
        
            blogItem.classList.add("blog-item");



            let link = document.createElement("a");


            url = url.substring(0, url.indexOf("?"));

            url += "?blog="+i;

            link.href = url;

        
            link.appendChild(title);
            blogItem.appendChild(link);
            
        
            let description = document.createElement("p");
            description.textContent = blogs[i].description;
        
            blogItem.appendChild(description);
            
            document.getElementById("blog-table").appendChild(blogItem);
        }
    }
    else
    {
        let i = Number(url.substring(url.indexOf("?blog=")+6));

        let blogItem = document.createElement("div");
        
        let paragraph = blogs[i].title; 
        let title = document.createElement("h4");
        title.textContent = paragraph;
    
        blogItem.classList.add("blog-item");



        let link = document.createElement("a");


        url = url.substring(0, url.indexOf("?"));


        link.href = url;

        link.textContent = "Back to blogs page";

    
        blogItem.appendChild(link);
        blogItem.appendChild(title);
        
    
        let description = document.createElement("p");
        description.textContent = blogs[i].description;
    
        blogItem.appendChild(description);
        
        document.getElementById("blog-table").appendChild(blogItem);
    }
})

