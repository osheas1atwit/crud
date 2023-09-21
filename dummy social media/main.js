let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => 
{
    e.preventDefault();
    console.log("submit clicked");

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
    }

};