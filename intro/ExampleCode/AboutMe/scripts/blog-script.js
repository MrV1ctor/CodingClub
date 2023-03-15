// let blogs = [
//     {"title": "blog 1", "desc":"description 1"},
//     {"title": "blog 2", "desc":"description 2"},
//     {"title": "blog 3", "desc":"description 3"},
//     {"title": "blog 4", "desc":"description 4"},
//     {"title": "blog 5", "desc":"description 5"},
// ];

// fetch('https://club.rottinger.net/api/blogs', { mode: "no-cors"})
// .then((response) => {
//     response.json()
//     .then((data) => {
//         console.log(data); 
//         addToPage(data);
//     })
// });

fetch("https://club.rottinger.net/api/blogs")
  .then((response) => response.json())
  .then((data) => addToPage(data));


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
