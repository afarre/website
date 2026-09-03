function Project1TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg1");
    // Get the image text
    var imgText = document.getElementById("imgtext1");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function Project2TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg2");
    // Get the image text
    var imgText = document.getElementById("imgtext2");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function Project3TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg3");
    // Get the image text
    var imgText = document.getElementById("imgtext3");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function Project4TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg4");
    // Get the image text
    var imgText = document.getElementById("imgtext4");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function Project6TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg6");
    // Get the image text
    var imgText = document.getElementById("imgtext6");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function Project7TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg7");
    // Get the image text
    var imgText = document.getElementById("imgtext7");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

// Script to expand/collide the project's sidebar sections
function ToggleExpandOrCollapse() {
    const element = document.getElementById("myCollapse");

    if (!element) return;

    element.classList.toggle("w3-hide");
}
