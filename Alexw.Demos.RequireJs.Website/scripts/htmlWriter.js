define(function () {
    
    // this is a module
    // this needs to be a file, and use the define method

    return {
        info: function (content) {
            var element = document.createElement("p");
            element.innerHTML = content;
            document.body.appendChild(element);
        }
    }
});