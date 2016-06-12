# get-dimensions

[![npm](https://img.shields.io/npm/v/get-dimensions.svg?maxAge=2592000)](https://www.npmjs.com/package/get-dimensions)

Get the dimensions of a DOM element.

```
npm install get-dimensions
```

##Usage example

```
var getDimensions = require("get-dimensions");

var element = document.getElementById("container");
var dimensions = getDimensions(element);

```

Dimensions will be an object with the following keys, allowing you to get the width and height with or without margins:

* width
* height
* outerWidth
* outerHeight


