
Angular-interactive-image is a directive for angular 1.x for creating rich, responsive, less painful and interactive images with tooltips. 
It uses svgs to create highlighted areas based on where you specify, then adds rich tooltips from ui-bootstrap. 

### Online Demo

Demo of the tooltips in action is available at [Trakerr.IO](trakerr.io).

[![Demo of tooltips at Trakerr.IO](https://raw.githubusercontent.com/trakerr-com/angular-interactive-image/master/tooltips%20example.png)](https://trakerr.io)

### Installation
Include these two files in your project
```
<script src="./angular-interactive-image.min.js"></script>
<link href="./angular-interactive-image.css"></link>
```
If you don't already have it, you'll also need ngSanitize. 
```
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
```
Inject it into your module

### Compatibillity
Works in all modern browsers except IE 11 and below. Edge is fine.
```javascript
  angular
    .module('app', [
      'ngRoute',
      'ui.bootstrap',
      'angular-interactive-image'
    ])
    ...
```

### Using the directive
```json
<div interactive-image 
  imagepath="'MyImage.png'"
  width="1287" 
  height="968"
  mask="
  {
  x: 226, 
  y: 62,
  width: 1466, 
  height: 930
  }"
  tooltips="[
  {
  width: 60,
  height: 30,
  x:200,
  y:200,
  text:'foo',
  },
  {
  width: 60,
  height: 30,
  x:200,
  y:200,
  filePath:'app/tooltips/tooltip2.html',
  },
  {
  width: 60,
  height: 30,
  x:200,
  y:200,
  html:'<h1>Some text</h1>'
  }]">
</div>
    //I suggest storing your tooltip data in a separate file or in a $scope variable, then referring to it like
    tooltips="myTooltips"
```

### Image Options

###### Width/Height
Simply enter the native height and width of the image, this is required in order for it to work properly.

###### ImagePath
The Image you want to use as the background.

###### Mask
If you want the mask to only appear on a specific area of the image. For example, if you have an image of a laptop and you only want the image to cover the screen of the laptop.
```json
"{
x: 226, 
y: 62,
width: 1466, 
height: 930
}"
```
###### Tooltips
The array of JSON objects that contains the info for all the tooltips. 

### Tooltip Options

###### Width/Height and x/y
It works on the coordinate system like any svgs, but you use the exact spot in the NATIVE resolution of the image. This indicates where the highlighted section will appear. The following example will highlight a 50/50 area in the top-left corner of the image.
```json
"{
width: 50,
height: 50,
x: 0
y: 0
}"
```
###### text 
This just puts plain text in the tooltip, looks pretty ugly, I wouldn't use this in production.

###### html
Write directly tooltips directly in html, tends to be best for simple tooltips.

###### filePath

Point the tooltip to a specific html template. Can be good if the tooltip is complex and you need to isolate the markup so it doesn't clutter up the json.

