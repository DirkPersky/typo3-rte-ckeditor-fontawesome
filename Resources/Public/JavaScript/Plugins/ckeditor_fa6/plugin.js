import {Core, UI} from '@typo3/ckeditor5-bundle.js';
import {default as modalObject} from "@typo3/backend/modal.js";

export default class DPFontAwesome extends Core.Plugin {
    static pluginName = 'DPFontAwesome';

    init() {
        const editor = this.editor;
        this.DPFontAwesome = editor.config.get('ui.DPFontAwesome');

        this._addFontawesomeCss(document);

        // The button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add(DPFontAwesome.pluginName, () => {
            // The button will be an instance of ButtonView.
            const button = new UI.ButtonView();

            button.set({
                label: 'Insert FontAwesome icon',
                withText: false,
                command: 'ckeditor_fa',
                icon: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
                    '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' +
                    '<svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n' +
                    '    <use id="Hintergrund" xlink:href="#_Image1" x="0" y="0" width="16px" height="16px"/>\n' +
                    '    <defs>\n' +
                    '        <image id="_Image1" width="16px" height="16px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QUYCi8USdD7QQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAGnSURBVDjLpZNNT1NBFIafM3duewtaMZCQhhBBDWpcgSHElSTGvWsWLt2buOd/sICNa9z4C4zgStEFH8q3FSstbbmtuba09x4X4E1bYmLhJDPJZHKemfd9Z2R4/qVyiTIArnGwYto2/pdqjAjP7z/i6a0JamEDAVI2QTrh0esmccQQqcYjZV2clsOsEeHF+BPWSj94s/uZB4MjTA+NMXy1n+NawFJuk0+FbwTNBteSKWbGpni9/ZG1cg5VxUaqLKy+I2jWmXv8jOmhu21XnLkzxW7liGylyMTgDa64HuvlHBvln4QoFiBC6fN6zjX/rdH0AKPpgXgdRmG7iSKg3WShHSl0XSKXA1jTkkJMOqMeVEu8/f6F/WqJHuvyMHObyczNuGHlcI/VowOiM80xoBBUmF1e5EMhS/ZXkeP6b1zjsLizwr3rGfq9Xg6DCpt+nr1qEaUNIPiNGgvrS0QojhhEhLo2+ern2fLzWGM4iUJAzktIOhZrDA0N8Ry31S2sOZUWAlYckA4/VJVXG++pNU9IGPtv4+OpEwBs+QVAYyO7SuT0XVz8R/8BxfCeROZFcMgAAAAASUVORK5CYII="/>\n' +
                    '    </defs>\n' +
                    '</svg>\n',
            });

            // Insert a text into the editor after clicking the button.
            this.listenTo(button, 'execute', () => this._openElementBrowser(editor));

            return button;
        });
    }

    _openElementBrowser(e) {
        var self = this;
        const url = new URL('dialogs/index.html', import.meta.url).pathname;

        var bc = new BroadcastChannel('fontawesome:selected');
        var modal = modalObject.advanced({
            type: modalObject.types.iframe,
            title: 'Fontawesome',
            content: url,
            size: modalObject.sizes.medium,
            callback: (t) => {
                var iframe = t.querySelector('iframe');
                iframe.addEventListener('load', (e) => {
                    self._addFontawesomeCss(iframe.contentDocument);
                }, true);

                bc.onmessage = function (message) {
                    self.insertIcon(message.data);
                    t.hideModal();
                };
            }
        });

        modal.addEventListener('typo3-modal-hide', e => {
            bc.close();
        });
    }

    _addFontawesomeCss(HTMLDocumentNode) {
        // Get HTML head element
        let head = HTMLDocumentNode.getElementsByTagName('HEAD')[0];
        // Create new link Element
        let link = document.createElement('link');
        // set the attributes for link element
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = this.DPFontAwesome.css;
        // Append link element to HTML head
        console.log(head, link, HTMLDocumentNode);
        head.appendChild(link);
    }

    insertIcon(iconClass) {
        if (typeof iconClass == 'object') iconClass = iconClass.join(' ');
        const content = `<i class="${iconClass}" aria-hidden="true">&nbsp;</i> `;

        const viewFragment = this.editor.data.processor.toView(content);
        const modelFragment = this.editor.data.toModel(viewFragment);

        this.editor.model.insertContent(modelFragment, this.editor.model.document.selection.getFirstPosition());
    }
}