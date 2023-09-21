let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => 
{
    e.preventDefault();

    formValidation();

})

let formValidation = () =>
{
    
    if(input.value.trim() == "")
    {
        msg.innerHTML = "empty post not permitted"
        console.log("failed upload. blank post.");
    }
    else
    {
        console.log("successful post");
        msg.innerHTML = "";
        acceptData();
    }

};

let data = {};

let acceptData = () =>
{
    // data takes input.value as JSON
    data["text"] = input.value;
    console.log(data["text"]);

    createPost();
};

let createPost = () =>
{
    posts.innerHTML += 
    `
    <div>
        <p>${data["text"]}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

let editPost = (e) =>
{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

let deletePost = (e) => 
{
    e.parentElement.parentElement.remove();
};