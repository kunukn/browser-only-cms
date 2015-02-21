+ function setupPrototypeFunctions() {

    var parseComment = function() {
        var startComment = "/*!",
            endComment = "!*/",
            stringWithComment = this.toString(),
            startIndex = stringWithComment.indexOf(startComment);

        if (startIndex < 0) {
            return 'OBS! extractComment function invalid, did you forget? ' + startComment;
        }

        var endIndex = stringWithComment.lastIndexOf(endComment);

        if (endIndex < 0) {
            return 'OBS! extractComment function invalid, did you forget? ' + endComment;
        }

        return stringWithComment.slice(startIndex + startComment.length, -(stringWithComment.length - endIndex));
    };

    if (!Function.prototype.parse) {
        Function.prototype.parse = parseComment;
    }

    if (!Function.prototype.parseMarkdown) {
        Function.prototype.parseMarkdown = function() {
            var string = parseComment.call(this);
            return markdown.toHTML(string);
        }
    }

}();
