define(['consoleWriter', 'htmlWriter'], function(consoleWriter, htmlWriter) {

    // this is a module
    // this needs to be a file, and use the define method

    var Application = function() {
        this.name = "Application";
    };

    Application.prototype.sayHello = function(name) {
        consoleWriter.info("Hello from " + this.name + ", " + name);
        htmlWriter.info("<p>Hello from " + this.name + ", " + name + "</p>");
    }

    return Application;

});