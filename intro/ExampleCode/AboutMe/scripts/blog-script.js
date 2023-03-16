fetch("https://club.rottinger.net/api/blogs")
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.length; i++)
    {
        let child = document.createElement("div");

        let title = document.createElement("h2");
        title.textContent = data[i].title;

        let description = document.createElement("p");
        description.textContent = data[i].description;

        if(i == 0)
            child.classList.add("table-item-top")
        if(i == data.length - 1)
            child.classList.add("table-item-bottom")


        child.classList.add("table-item")
        child.appendChild(title)
        child.appendChild(description)
        document.getElementById("blog-table").appendChild(child);
    }
});


function addToPage(data)
{
    for (let i = 0; i < data.length; i++)
    {
        let child = document.createElement("div");
    
        let title = document.createElement("h2");
        title.textContent = data[i].title;
    
        let description = document.createElement("p");
        description.textContent = data[i].description;
    
        if(i == 0)
            child.classList.add("table-item-top")
        if(i == data.length - 1)
            child.classList.add("table-item-bottom")
    
    
        child.classList.add("table-item")
        child.appendChild(title)
        child.appendChild(description)
        document.getElementById("blog-table").appendChild(child);
    }
}
