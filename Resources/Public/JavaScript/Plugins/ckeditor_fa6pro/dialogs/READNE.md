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

### Update Icons with bash

When loading with npm, there is a folder with SVGs: 

`node_modules/@fortawesome/fontawesome-pro/svgs/light`

Bash script to get the list of icons:  

```bash
#!/bin/bash

filelist=""
for file in *.svg
do
  filename="${file%.svg}"
  filelist+=\"$filename\",
done
echo $filelist
```

=> copy output, remove last `,` and paste into ckeditor-fa.js => `var faLight = [`