define(['consoleWriter', 'htmlWriter'], function(consoleWriter, htmlWriter) {

    var Application = function() {
        this.name = "Application";
    };

    Application.prototype.sayHello = function(name) {
        consoleWriter.info("Hello from " + this.name + ", " + name);
        htmlWriter.info("<p>Hello from " + this.name + ", " + name + "</p>");
    }

    return Application;

});