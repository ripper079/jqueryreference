
console.log("The file main_js.js was succesfully included");


// It is fired as the DOM is fully loaded and ready to be manipulated by the script. Earliest point in page load, where script can safely access element in the dom
//It fires before all images, css, frames etc
$(document).ready(function() {
    alert('1. DOM Loaded and ready');   //Always before window.load

    if ($('#mybuttonq').length > 0){      //The element mybutton was found (or is present)
        console.log('The element mybutton was found');

        //First portion the selector, this case the id selector
        $('#mybutton').click(function() {        
            //document.getElementById('mybutton').style.backgroundColor = 'lightgreen';     //javascript way
            $('#mybutton').css('background-color', 'yellow');                       //jquery way
        
    })
    }
    else {
        console.log('The element mybutton was NOT found');
    }


    //The element selector
    $('td');                //Selects all td elements
    $('div a').css('background-color', 'pink');              //Select all anchor elements that are descendants of div element

    //Alert total count of td elements on the page
    alert($('td').length);
    
});

//Depracted
// $(window).on('load', function () {
//     alert("2. Window loaded");
// });

