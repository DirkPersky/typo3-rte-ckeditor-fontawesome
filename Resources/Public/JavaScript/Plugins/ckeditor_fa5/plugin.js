(function ($) {
    var CKEDITOR_FA = {
        cdn: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
        version: '11.5.2'
    };

    CKEDITOR.dtd.$removeEmpty.span = 0;
    CKEDITOR.dtd.$removeEmpty.em = 0;
    CKEDITOR.dtd.$removeEmpty.i = 0;

    CKEDITOR.plugins.add('ckeditor_fa5', {
    icons: 'ckeditor-fa',
    init: function (editor) {
        editor.addCommand('ckeditor_fa5', new CKEDITOR.dialogCommand('ckeditorFaDialog', {
            allowedContent: 'i(!fa-*)',
        }));
        editor.ui.addButton('ckeditor_fa5', {
            label: 'Insert FontAwesome icon',
            command: 'ckeditor_fa5',
            toolbar: 'insert',
            icon: this.path + 'icons/ckeditor-fa.png',
        });
        CKEDITOR.dialog.add('ckeditorFaDialog', this.path + 'dialogs/ckeditor-fa.js?v='+CKEDITOR_FA.version);
        CKEDITOR.document.appendStyleSheet(this.path + 'css/ckeditor-fa.css?v='+CKEDITOR_FA.version);

        editor.addContentsCss(CKEDITOR_FA.cdn);
        loadCSS(CKEDITOR_FA.cdn);
    }
  });

    /**
     * Load Fontawesome
     * @param href
     */
    function loadCSS(href) {
        var headID = document.getElementsByTagName('head')[0];
        var cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.type =  "text/css";
        cssLink.href = href;
        // add to dom
        headID.appendChild(cssLink);
    }
})(TYPO3.jQuery);