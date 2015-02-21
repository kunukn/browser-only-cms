var Site = Site || {},
    app = {};

+ function runApp() {
    var data = {
        multiline: ko.mapping.fromJS(Site.data.multiline),
        spots: ko.mapping.fromJS(Site.data.items)
    };
    
    app = data;
    // console.log(app);
    ko.applyBindings(data);
}();
