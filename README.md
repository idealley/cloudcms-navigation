[![Coverage Status](https://coveralls.io/repos/github/idealley/cloudcms-navigation/badge.svg?branch=master)](https://coveralls.io/github/idealley/cloudcms-navigation?branch=master)
# Cloud CMS navigation library 
Small library to manage menus and breadcrumbs with Cloud CMS

For now this code is extracted from the [this tutorial](https://idealley.gitbooks.io/cloud-cms-how-to-manage-menus/content/) that explains the concepts behind this code and gives an example setup.

## Usage
Install the library

`$ npm i --save cloudcms-navigation`

In your code:

```javascript
  // Import the classes
  import { Menu, Breadcrumb } from 'cloudcms-navigation';
  // Newup a menu and/or a breadcrumb object
  const m = new Menu();
  const b = new Breadcrumb();

  // use it for example for an express middelware:
  (req, res, next) => {
    // checking if we have data... if not going to the next middleware
    if(Object.keys(res).indexOf('data') != -1){
        const array = b.parse(b.parentsToTree(res.data.breadcrumb.items, res.data.item[0].parent_doc));
        
        // Generate path value for each items
        res.data.breadcrumb = b.addBreadcrumbPath(array, res.data.item[0]); 

    }
    next();
}
  // and/or 
  (req, res, next) => {
    if(Object.keys(res).indexOf('data') != -1){
        res.data.items = m.parse(m.childrenToTree(res.data.items, res.data.item._doc));
    }
    next();
}
```

the same but in ES5:
```javascript
  // Import the classes
  const Menu = require('cloudcms-navigation').Menu;
  const Breadcrumb = require('cloudcms-navigation').Breadcrumb;
  // Newup a menu and/or a breadcrumb object
  const m = new Menu();
  const b = new Breadcrumb();

  ...

```
## Displaying a Breadcrumb
The example breadcrumb middleware produces an array of Objects `res.data.breadcrumb` in your template you simply need to loop and print all of them in a list:
```javascript
    ul(style="padding:0;")
        li(style="display:inline;") you are here: 
            a(href='/') home
            span &nbsp;>
        // Loop through the array    
        - for(var i = 0; i < data.breadcrumb.length; i++){
        li(style="display:inline;")
        - var carret = i < data.breadcrumb.length -1 ? '>' : ''
            span= ' '
            //print the title of each menu item and the path
            a(href= data.breadcrumb[i].path)= data.breadcrumb[i].title 
            span= carret
        - }
```
This breadcrumb object could be added to the item it was generated for in cloudcms, thus saving processing time to display pages. 

## Displaying a Menu
Loop through the returned array:
```javascript
    // Example with Jade templating engine
    // Loop through the menu items
    each i in menu.items
      ul
        li
            // Print first level items
            a(href= i.path)= i.title
        // Check for children and loop through them
        // if you have deeply nested menus, use recursion.
        if i.children
            each c in i.children
                ul
                    li
                        a(href= c.path)= c.title
```

## Contributions
Contributions are welcome, submit pull requests.


