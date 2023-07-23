const baseURL = "https://project-1-api.herokuapp.com";
const apiKey = "?api_key=46aad9a0-7a68-4a02-ac6e-086c8ab3ad37"

axios
    .get(baseURL + "/comments" +apiKey)
    .then(res =>{
        const allComments = res.data;
        console.log(allComments);
        const commentListElement = document.getElementById("comment-box"); //container for comments
        displayComments(commentListElement, allComments);
    })

    .catch(error =>{
        console.error ("Error: " + "Error retrieving user data", error);
    });

function displayComments(commentList, comments){
    commentList.innerHTML = ""; //THIS WILL REPLACE COMMENTS WITH AN UPDATED VERSION 

    //Create the elements for both the existing and new comments
    comments.forEach((comment) =>{

        const publishedComment = document.createElement("article");
        publishedComment.classList.add("comment-log");
    
        const imageEl = document.createElement("img");
        imageEl.classList.add("comment-log__image");
        imageEl.setAttribute("src", "../assets/images/Mohan-muruge.jpg");
        imageEl.setAttribute("alt", comment.name + " icon");
        publishedComment.appendChild(imageEl);
    
        const nameEl = document.createElement("h3");
        nameEl.classList.add("comment-log__name");
        nameEl.innerText =  comment.name;
        publishedComment.appendChild(nameEl);
    
        const timeEl = document.createElement("p");
        timeEl.classList.add("comment-log__time");
        const date = new Date(comment.timestamp);
        const desiredDateDisplay = date.toLocaleDateString();
        timeEl.innerText = desiredDateDisplay;
        publishedComment.appendChild(timeEl);
    
        const commentEl = document.createElement("p");
        commentEl.classList.add("comment-log__comment");
        commentEl.innerText = comment.comment;
        publishedComment.appendChild(commentEl);
    
        commentList.appendChild(publishedComment);
    });
}

// Add Comments to Page

const form = document.getElementById ("conversation__form");
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const errorElement = document.querySelectorAll(".form__label--error");
    for (let i = 0; i < errorElement.length; i++) {
        errorElement[i].classList.remove("form__label--error");
    }

    const name = event.target.name.value;
    const comment = event.target.comment.value;

    const newComment = {
        name: name,
        comment: comment
    }

    //Errors in Name or Comment (Validation Process)

    let errorsExist = false

    if (name === "") {
        errorsExist = true;
        alert("Invalid Name. Please type your name");
        const errorsExistName = document.querySelector(".form__label--name");
        errorsExistName.classList.add("form__label--error");
    }

    if(comment === "") {
        errorsExist = true;
        alert("Invalid Comment. Please type your comment");
        const errorsExistComment = document.querySelector(".form__label--comment");
        errorsExistComment.classList.add("form__label--error")
    }

    if (errorsExist === true){
        return;
    }

    console.log(errorsExist);
   
    axios 
    .post(baseURL + "/comments" + apiKey, newComment)
    .then(response => {
        const newComment = response.data
        console.log(newComment);


        

        const commentListElement = document.getElementById("comment-box");
        // displayComments(commentListElement, allComments);
        commentListElement.prepend(newComment);

        accessUpdatedCommentListData()

    })

     .catch(error =>{
        console.error("Error from posting a comment: ", error)
    })

    event.target.reset();

})

function accessUpdatedCommentListData(){
    axios
        .get(baseURL + "/comments" + apiKey)
        .then(res =>{
            console.log(res.data);

            const commentListElement = document.getElementById("comment-box");
            displayComments(commentListElement, res.data);
        })
        .catch(error =>{
            console.error("Error: cannot obtain updated list of comments ", error);
        })
        
}
