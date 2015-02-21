+ function setupPrototypeFunctions() {
    Function.prototype.extractComment = function() {
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
}();
