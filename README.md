# browser only cms

**Dependencies:** any modern browser and your favorite text editor.

Open the index.html with your browser.

  * Your browser is the server
  * Your CMS is the content folder
  * Your CMS editor is your favorite text-editor.

To edit the content open the `content/text/app-data.js` file and refresh your browser to see the update.

## About
This is an idea for a very minimalistic CMS solution.

You only need a browser to run the CMS solution. No web-server or DB are needed to host your CMS solution.

The content is separated to a resource folder (the content folder).
Text resources are stored inside a JavaScript file and not on a markup (html) page.

Here’s a snippet example of multiline text in markdown format stored in the resource file.

```
Site.data = {
   multiline: function() {
   /*!
   
# Fruits
 
**Today we have** 
 
  * apple
  * orange
  * banana
  
  !*/
  }.parseMarkdown()
}
```
