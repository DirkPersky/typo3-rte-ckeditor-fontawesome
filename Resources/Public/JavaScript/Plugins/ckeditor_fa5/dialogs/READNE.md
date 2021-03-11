Update Icons https://fontawesome.com/cheatsheet

```javascript

[].concat.apply([], Array.prototype.map.call(document.querySelectorAll('.cheatsheet-set'), e => e.id).map(e =>{
    return {
        id: e
    }
}).map(e => Array.prototype.map.call(document.querySelectorAll(`#${e.id} article.icon > dl > .select-all.word-wrap`), element => `${element.outerText}`))).map(e => `"${e}"`).join(',')

```