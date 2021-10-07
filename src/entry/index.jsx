/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const translationMap = {
    'ja': {
        'gui.extension.myExtension.description': 'Xcratch 拡張の例'
    },
    'ja-Hira': {
        'gui.extension.myExtension.description': 'Xcratch (えくすくらっち)かくちょうのれい'
    }
};

const entry = {
    name: 'My Extension',
    extensionId: 'myExtension',
    extensionURL: 'https://atsushi-morita.github.io/xcx-my-extension/dist/myExtension.mjs',
    collaborator: 'atsushi-morita',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'an extension for Xcratch',
            description: 'Description for this extension',
            id: 'gui.extension.myExtension.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://atsushi-morita.github.io/xcx-my-extension/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
