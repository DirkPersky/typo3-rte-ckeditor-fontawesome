Update Icons https://cdpn.io/MarkBoots/fullpage/LYyeGzo

```javascript
Array.prototype.map.call(document.querySelectorAll('.icon-name'), e => e).map(e =>{
    return e.innerText
}).map(e => `"${e}"`).join(',')
```