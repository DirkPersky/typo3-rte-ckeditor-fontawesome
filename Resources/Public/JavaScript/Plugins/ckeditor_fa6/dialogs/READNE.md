Update Icons https://cdpn.io/MarkBoots/fullpage/LYyeGzo

```javascript
fetch("https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json")
.then(response =>response.json()).then(jsondata => {
    var solid = [], regular = [], brand = [];
    
    Object.entries(jsondata).forEach(([key, value]) => {
        if(typeof value.free != 'undefined') {
            if(value.free.indexOf('brands') >= 0) brand.push(`"${key}"`);
            if(value.free.indexOf('solid') >= 0) solid.push(`"${key}"`);
            if(value.free.indexOf('regular') >= 0) regular.push(`"${key}"`);
        }
    });

    console.warn('%cSOLID', "font-size:3rem"); console.log(solid.join(','));
    console.warn('%cREGULAR', "font-size:3rem"); console.log(regular.join(','));
    console.warn('%cBRAND', "font-size:3rem"); console.log(brand.join(','));
});

```