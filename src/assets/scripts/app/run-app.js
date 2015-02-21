var Site = Site || {},
    app = {};

+ function runApp() {
    var data = {
        spots: ko.mapping.fromJS(Site.data.items)
    };
    app = data;
    ko.applyBindings(data);
}();
