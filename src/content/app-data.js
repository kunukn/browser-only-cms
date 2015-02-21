var Site = Site || {};

(function() {
    var data = {
        items: [{
            type: 'apple',
            text: function() {
                /*!
                    <i>green</i>
                !*/
            }.extractComment()
        }, {
            type: 'orange'
        }, {
            type: 'banana'
        }, {
            type: 'tomato'
        }, {
            type: 'silver'
        }, {
            type: 'apple'
        }, {
            type: 'orange'
        }, {
            type: 'banana'
        }, {
            type: 'tomato'
        }, {
            type: 'silver'
        }, {
            type: 'apple'
        }, {
            type: 'orange'
        }, {
            type: 'banana'
        }, {
            type: 'tomato'
        }, {
            type: 'silver'
        }, {
            type: 'apple'
        }, {
            type: 'orange'
        }, {
            type: 'banana'
        }, {
            type: 'tomato'
        }, {
            type: 'silver'
        }]
    }
    Site.data = data;
})();
