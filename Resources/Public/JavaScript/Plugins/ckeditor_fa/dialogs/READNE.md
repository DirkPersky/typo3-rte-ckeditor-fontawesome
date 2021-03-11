Update Icons https://fontawesome.com/v4.7.0/icons/

```javascript
$(".fontawesome-icon-list i").map(function () { return '"' + this.className.replace('fa fa-','') + '"'}).toArray().join(',')

```