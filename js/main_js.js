
console.log("The file main_js.js was succesfully included");


// It is fired as the DOM is fully loaded and ready to be manipulated by the script. Earliest point in page load, where script can safely access element in the dom
//It fires before all images, css, frames etc
$(document).ready(function() {
    alert('1. DOM Loaded and ready');   //Always before window.load

    //First portion the selector 
    // $('#mybutton').click(function() {
    //     alert("1. Now the dom is ready to be manipulated");
    // })
});

//Depracted
// $(window).on('load', function () {
//     alert("2. Window loaded");
// });

