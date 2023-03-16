let blogs = [
    {
        "title" : "blog 1",
        "desc" : "description 1"
    },
    {
        "title" : "blog 2",
        "desc" : "description 2"
    },
    {
        "title" : "blog 3",
        "desc" : "description 3"
    },
    {
        "title" : "blog 4",
        "desc" : "description 4"
    },
    {
        "title" : "blog 5",
        "desc" : "description 5"
    }
];

for (let i = 0; i < blogs.length; i++)
{
    let blogItem = document.createElement("div");

    let paragraph = blogs[i].title; 
    let title = document.createElement("h4");
    title.textContent = paragraph;

    blogItem.classList.add("blog-item");

    blogItem.appendChild(title);
    

    let description = document.createElement("p");
    description.textContent = blogs[i].desc;

    blogItem.appendChild(description);
    
    document.querySelector("body").appendChild(blogItem);
}

