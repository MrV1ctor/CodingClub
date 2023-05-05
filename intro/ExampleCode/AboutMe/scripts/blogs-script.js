
fetch("https://club.rottinger.net/api/blogs/QMAHk5aIVFaI4SGuHUu1LPZjci6CK41QuK1pDiOD")
.then((response) => response.json())
.then((blogs) => {
    
    //no queries, show all blogs page
    if (window.location.href.indexOf("?")==-1)
    {

        for (let i = 0; i < blogs.length; i++)
        {
            let blogItem = document.createElement("div");
        
            //changed to remove paragraph
            let title = document.createElement("h4");
            title.textContent = blogs[i].title;
        
            blogItem.classList.add("blog-item");
        
            //
    
            let link = document.createElement("a");
    
            link.href = (window.location.href.substring(0, window.location.href.indexOf("?"))) + "?b="+i;
    
            link.appendChild(title);
            
            blogItem.appendChild(link);
            
    
            //
    
            //removed adding title to blogitem, instead made linking
        
            let description = document.createElement("p");
            description.textContent = blogs[i].description;
        
            blogItem.appendChild(description);
            
            document.getElementById("blog-table").appendChild(blogItem);
        }
    
        
    }
    else //queries found, create blog
    {

        //go home
        let link = document.createElement("a");
        link.href = window.location.href.substring(0, window.location.href.indexOf("?"));

        let homewords = document.createElement("p");
        homewords.textContent = "Back to Blogs";

        link.appendChild(homewords);



        //get the index
        let index = Number(window.location.href.substring(window.location.href.indexOf("?b=")+3));


        let blogItem = document.createElement("div");

        blogItem.appendChild(link);
        
        //changed to remove paragraph
        let title = document.createElement("h4");
        title.textContent = blogs[index].title;
    
        blogItem.classList.add("blog-item");

        blogItem.appendChild(title);
    
        let description = document.createElement("p");
        description.textContent = blogs[index].description;
    
        blogItem.appendChild(description);
        

        blogItem.appendChild(document.createElement("br"));


        let content = document.createElement("p");
        content.textContent = blogs[index].content;
    
        blogItem.appendChild(content);
        
        document.getElementById("blog-table").appendChild(blogItem);
    }
    
})
