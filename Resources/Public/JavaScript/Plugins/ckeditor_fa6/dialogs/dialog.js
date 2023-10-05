(function () {
    // set Icon Count
    var buttonGrp = document.querySelectorAll('button[data-icons-group]');
    var iconSection = document.querySelector('#faIcons');
    var blockMore = false;
    buttonGrp.forEach((btn, i) => {
        var set = btn.dataset['iconsGroup'];
        if (typeof window[set] == 'undefined') return;
        btn.querySelector('span').innerText = window[set].length;

        btn.addEventListener('click', e => {
            faIcons(window[set], btn.dataset['iconPref'])
        });

        if (i == 0) btn.click();
    });

    function faIcons(fas, ty) {
        var icons = '';
        for (var x in fas) {
            var ids = fas[x];
            var id = ids.split('-').join(' ');
            icons += '<div class="col col-sm-3 col-md-2">' +
                '<a href="#" class="p-2" onclick="return false;" data-icon="' + ty + ' fa-' + ids + '"><i class="' + ty + ' fa-' + ids + '"></i>' + id + '</a>' +
                '</div>';
        }

        iconSection.innerHTML = icons;

        iconSection.querySelectorAll('a').forEach(link => {
            link.removeEventListener('click', klick)
            link.addEventListener('click', klick)
        });
    }

    var search = document.querySelector('input[name="search"]');
    search.addEventListener('keyup', e => {
        var search = e.target.value;

        iconSection.childNodes.forEach(item => {
            var icon = item.childNodes[0].dataset['icon'];

            if (icon && icon.indexOf(search) >= 0) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        })
    });

    function klick(el) {
        var selectedClass = [el.target.dataset['icon']];

        var faSize = document.querySelector('[name="faSize"]').value || null;
        var faFw = document.querySelector('[name="faFw"]').value || null;
        var faBorder = document.querySelector('[name="faBorder"]').value || null;
        var faSpin = document.querySelector('[name="faSpin"]').value || null;
        var faRotate = document.querySelector('[name="faRotate"]').value || null;

        if (faSize) selectedClass.push(faSize);
        if (faFw) selectedClass.push(faFw);
        if (faBorder) selectedClass.push(faBorder);
        if (faSpin) selectedClass.push(faSpin);
        if (faRotate) selectedClass.push(faRotate);

        iconSection.querySelectorAll('a').forEach(link => {
            link.removeEventListener('click', klick)
        });

        var bc = new BroadcastChannel('fontawesome:selected');
        bc.postMessage(selectedClass);
    }
})();