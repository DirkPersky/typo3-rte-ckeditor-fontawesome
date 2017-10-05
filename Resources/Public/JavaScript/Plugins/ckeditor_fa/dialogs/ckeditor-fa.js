function ckeditor_fa_click(el) {
  var _el = TYPO3.jQuery(el);
  // remove Active Class
  TYPO3.jQuery('#ckeditor-fa-icons-select a').removeClass('active');
  // Set Vale
  TYPO3.jQuery('.fontawesomeClass input').val(_el.attr('class'));
  // document.getElementsByClassName('fontawesomeClass')[0].getElementsByTagName('input')[0].value = _el.attr('class');
  // Set Active Class
  _el.addClass('active');
}
(function ($) {

  CKEDITOR.dialog.add('ckeditorFaDialog', function (editor) {
    function ckeditorFaGetIcons() {
      $.ajaxSetup({async: false});
      var icons = $.get(CKEDITOR.plugins.getPath('ckeditor_fa')+'dialogs/index.html');
      $.ajaxSetup({async: true});
      if (icons.status == 200) {
        return icons.responseText;
      } else {
        return  'Icons not allowed';
      }
    }
    var icons = ckeditorFaGetIcons();
    var ckeditorFaIcons = icons;

    return {
      title: 'FontAwesome Icons',
      minWidth: 400,
      minHeight: 200,
      contents: [
        {
          id: 'font-awesome',
          label: 'Add icon',
          elements: [
            {
              type: 'text',
              id: 'faicon',
              className: 'fontawesomeClass',
              style: 'display:none',
              validate: CKEDITOR.dialog.validate.notEmpty("Select fontAwesome icon")
            },
            {
              type: 'html',
              html: '<div id="ckeditor-fa-icons">' + ckeditorFaIcons + '</div>'
            }
          ]
        },
      ],
      onLoad: function(){
        var faSize =  $('input[name="fa-size[]"]');
        faSize.on('change',function(e){
            var prop = $(e.delegateTarget).prop('checked');

            faSize.prop('checked', false);

            $(e.delegateTarget).prop('checked', prop);
        });

        var faRotate =  $('input[name="fa-rotate[]"]');
        faRotate.on('change',function(e){
            var prop = $(e.delegateTarget).prop('checked');

            faRotate.prop('checked', false);

            $(e.delegateTarget).prop('checked', prop);
        });

        var faPull =  $('input[name="fa-pull[]"]');
        faPull.on('change',function(e){
            var prop = $(e.delegateTarget).prop('checked');

            faPull.prop('checked', false);

            $(e.delegateTarget).prop('checked', prop);
        });
      },
      onOk: function () {
        var icons = document.getElementById('ckeditor-fa-icons-select');
        var activeIcon = icons.getElementsByClassName('active');
        for (var i = 0; i < activeIcon.length; i++) {
          activeIcon[i].className = activeIcon[i].className.replace('active', '').trim();
        }
        var dialog = this;
        var icon = editor.document.createElement('i');
        var _checkClasses = [
            'fa',
            'fa-' + dialog.getValueOf('font-awesome', 'faicon')
        ];

        $('input[name="fa-size[]"]:checked,' +
            'input[name="fa-rotate[]"]:checked,' +
            'input[name="fa-pull[]"]:checked,' +
            'input[name="fa-border"]:checked,' +
            'input[name="fa-spin"]:checked,' +
            'input[name="fa-fw"]:checked').each(function(index, el){
            _checkClasses.push( $(el).val() );
        });

        icon.setAttribute('class', _checkClasses.join(' '));
        editor.insertElement(icon);
      }
    };
  });
})(TYPO3.jQuery);