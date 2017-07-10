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
      onOk: function () {
        var icons = document.getElementById('ckeditor-fa-icons-select');
        var activeIcon = icons.getElementsByClassName('active');
        for (var i = 0; i < activeIcon.length; i++) {
          activeIcon[i].className = activeIcon[i].className.replace('active', '').trim();
        }
        var dialog = this;
        var icon = editor.document.createElement('i');
        icon.setAttribute('class', 'fa fa-' + dialog.getValueOf('font-awesome', 'faicon'));
        editor.insertElement(icon);
      }
    };
  });
})(TYPO3.jQuery);