let blogs = [
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"},
    {"title": "hi", "desc":"yo"}
];


for (let i = 0; i < blogs.length; i++)
{
    let kid = document.createElement("div");
    let title = document.createElement("h2");
    title.textContent = blogs[i].title;
    let description = document.createElement("p");
    description.textContent = blogs[i].desc;
    kid.appendChild(title)
    kid.appendChild(description)
    document.querySelector("body").appendChild(kid);
}