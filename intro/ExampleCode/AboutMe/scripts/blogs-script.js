
fetch("https://club.rottinger.net/api/blogs")
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
    
            link.href = (window.location.href.substring(0, window.location.href.indexOf("?"))) + "?b="+(blogs[i].id-1);
    
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
        
        document.getElementById("blog-table").appendChild(blogItem);
    }
    
})

//VICTOR'S NOTE
//currently doesnt work for last one because of missing number 8, id 11-1 is out of bounds for length 9

//printed in console...
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, title: 'Learning HTML!', description: 'Follow my journey as I learn HTML!!', createdAt: '2023-03-10T01:24:44.000Z', updatedAt: '2023-03-10T01:24:44.000Z'}
// 1: {id: 2, title: 'Learning CSS!', description: 'Follow my journey as I learn CSS!!', createdAt: '2023-03-10T01:25:04.000Z', updatedAt: '2023-03-10T01:25:04.000Z'}
// 2: {id: 3, title: 'Learning JS!', description: 'Follow my journey as I learn JS!!', createdAt: '2023-03-10T01:25:10.000Z', updatedAt: '2023-03-10T01:25:10.000Z'}
// 3: {id: 4, title: 'Devlog 1', description: 'Learning how to use elements in HTML', createdAt: '2023-03-10T01:26:20.000Z', updatedAt: '2023-03-10T01:26:20.000Z'}
// 4: {id: 5, title: 'Devlog 2', description: 'Learning how to properly format my HTML document', createdAt: '2023-03-10T01:26:37.000Z', updatedAt: '2023-03-10T01:26:37.000Z'}
// 5: {id: 6, title: 'Devlog 3', description: 'Learning how to properly format my HTML document', createdAt: '2023-03-10T01:26:50.000Z', updatedAt: '2023-03-10T03:10:05.000Z'}
// 6: {id: 7, title: 'Devlog 4', description: 'Learning how to write JS', createdAt: '2023-03-10T01:27:28.000Z', updatedAt: '2023-03-10T01:27:28.000Z'}
// 7: {id: 9, title: 'Devlog 4', description: 'Uh oh! We have a duplicate title!!', createdAt: '2023-03-16T12:39:43.000Z', updatedAt: '2023-03-16T12:39:43.000Z'}
// 8: {id: 10, title: 'Devlog 5', description: 'Learning how to link a data base to our pages!', createdAt: '2023-03-16T12:40:48.000Z', updatedAt: '2023-03-16T12:40:48.000Z'}
// 9: {id: 11, title: 'Test', description: 'Test1', createdAt: '2023-03-16T12:41:26.000Z', updatedAt: '2023-03-16T12:41:26.000Z'}