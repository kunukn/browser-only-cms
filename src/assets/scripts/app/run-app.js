var Site = Site || {},
    app = {};

(function runApp() {

    app = {
        multiline: ko.mapping.fromJS(Site.data.multiline),
        spots: ko.mapping.fromJS(Site.data.items)
    };

    ko.applyBindings(app);

})();
