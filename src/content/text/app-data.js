var Site = Site || {};

(function() {
    Site.data = {

        multiline: function() {
            /*!
# browser only cms

**Dependencies:** any modern browser and your favorite text editor.

Open the index.html with your browser.

  * Your browser is the server
  * Your database and media library is the content folder
  * Your Cms editor is your favorite text-editor.

To edit the content open `content/text/app-data.js` file and refresh your browser to see the update.
            !*/
        }.parseMarkdown(),

        items: [
        {
            type: 'apple',
            text: function() {
                /*!
                    <i>green</i>
                !*/
            }.parse()
        },{
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
        }
        ]
    }
})();
