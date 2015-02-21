var Site = Site || {};

(function() {
    var data = {
        multiline: function() {
            /*!
                I am a multiline text <br>
                This is the second line <br>
                This is the third
            !*/
        }.extractComment(),
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
