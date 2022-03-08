(function ($) {
    CKEDITOR.dtd.$removeEmpty.span = 0;
    CKEDITOR.dtd.$removeEmpty.em = 0;
    CKEDITOR.dtd.$removeEmpty.i = 0;

    CKEDITOR.plugins.add('ckeditor_fa', {
        icons: 'ckeditor-fa',
        init: function (editor) {
            editor.addCommand('ckeditor_fa', new CKEDITOR.dialogCommand('ckeditorFaDialog', {
                allowedContent: 'i(!fa-*)',
            }));
            editor.ui.addButton('ckeditor_fa', {
                label: 'Insert FontAwesome icon',
                command: 'ckeditor_fa',
                toolbar: 'insert',
                icon: this.path + 'icons/ckeditor-fa.png',
            });
            CKEDITOR.dialog.add('ckeditorFaDialog', this.path + 'dialogs/ckeditor-fa.js?v=11.5.2');
            CKEDITOR.document.appendStyleSheet(this.path + 'css/ckeditor-fa.css?v=11.5.2');

            editor.addContentsCss('https://use.fontawesome.com/releases/v6.0.0/css/all.css');
        }
    });
})(TYPO3.jQuery);