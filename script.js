const postBtn = document.getElementById("post-btn"),
postInput = document.getElementById("post-input"),
upvoteBtn = document.querySelectorAll(".upvote"),
downvoteBtn = document.querySelectorAll(".downvote"),
posts = document.querySelector(".posts");

for(let i = 0; i < upvoteBtn.length; i++) {
    upvoteBtn[i].addEventListener("click", () => {
        let This = upvoteBtn[i];
        if(This.classList.contains("fa-regular")) {
            This.classList.replace("fa-regular", "fa-solid");
            if(downvoteBtn[i].classList.contains("fa-solid")) {
                downvoteBtn[i].classList.replace("fa-solid", "fa-regular");
            }
        } else {
            This.classList.replace("fa-solid", "fa-regular");
        }
    });

    downvoteBtn[i].addEventListener("click", () => {
        let This = downvoteBtn[i];
        if(This.classList.contains("fa-regular")) {
            This.classList.replace("fa-regular", "fa-solid");
            if(upvoteBtn[i].classList.contains("fa-solid")) {
                upvoteBtn[i].classList.replace("fa-solid", "fa-regular");
            }
        } else {
            This.classList.replace("fa-solid", "fa-regular");
        }
    });
}

const postContent = () => {
    if(postInput.value != "") {
        posts.insertAdjacentHTML("beforebegin", 
        `<div class="post">
            <div class="post-info">
                <img src="./profile-img.png">
                <div>
                    <h1>${postInput.value}</h1>
                    <small>Asked by Anonymous</small>
                </div>
            </div>
        </div>`);

        postInput.value = "";
    }
};

postBtn.addEventListener("click", postContent);