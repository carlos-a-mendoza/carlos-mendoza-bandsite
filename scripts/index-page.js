const pastComments = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        imageSrc: "../assets/images/Mohan-muruge.jpg",
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        imageSrc: "../assets/images/Mohan-muruge.jpg",
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        imageSrc: "../assets/images/Mohan-muruge.jpg",
    },
];

//Add all past comments to the comment element

const commentEl = document.getElementById("comment-box");
for (let i=0; i < pastComments.length; i++){
    const pastCommentEl = createPostHistoryElement(pastComments[i]);
    commentEl.appendChild(pastCommentEl);
}

// Comment section will contain these posts
function createPostHistoryElement(pastComments) {

    const pastCommentEl = document.createElement("article");
    pastCommentEl.classList.add("comment-log");

    const imageEl = document.createElement("img");
    imageEl.classList.add("comment-log__image");
    imageEl.setAttribute("src", pastComments.imageSrc);
    imageEl.setAttribute("alt", pastComments.name + " icon")

    const nameEl = document.createElement('h3');
    nameEl.classList.add("comment-log__name");
    nameEl.innerText =  pastComments.name;

    const timeEl = document.createElement('p');
    timeEl.classList.add('comment-log__time');
    timeEl.innerText = pastComments.timestamp;

    const commentEl = document.createElement('p');
    commentEl.classList.add('comment-log__comment');
    commentEl.innerText = pastComments.comment;

    pastCommentEl.appendChild(nameEl);
    pastCommentEl.appendChild(timeEl);
    pastCommentEl.appendChild(commentEl);
    pastCommentEl.appendChild(imageEl);

    return pastCommentEl;
}