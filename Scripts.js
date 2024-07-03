function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}


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

function Project5TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg5");
    // Get the image text
    var imgText = document.getElementById("imgtext5");
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

function Project8TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg8");
    // Get the image text
    var imgText = document.getElementById("imgtext8");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function Project9TabbedFunc(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg9");
    // Get the image text
    var imgText = document.getElementById("imgtext9");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

$.fn.linkRow = function(element) {
    thisRow = this.find('tbody tr');

    thisRow.not('a').on('mouseup', function(e) {
        hrefLocation = $(this).find('td.link:first a:first').attr('href');
        if ( hrefLocation ) {
           if (e.which == 2) { 
              window.open(hrefLocation);
           }
           else{
              window.location.href = hrefLocation;
           }
        };
    }).addClass( ( thisRow.has('td.link') ) ? 'pointer' : '' );
    return this;
};
