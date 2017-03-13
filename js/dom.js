"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const index_1 = require("./index");
var dom;
(function (dom) {
    dom.isKeyCode = (kc) => (event) => {
        return kc === event.which || kc === event.keyCode;
    };
    var KeyCode;
    (function (KeyCode) {
        KeyCode[KeyCode["BACKSPACE"] = 8] = "BACKSPACE";
        KeyCode[KeyCode["TAB"] = 9] = "TAB";
        KeyCode[KeyCode["ENTER"] = 13] = "ENTER";
        KeyCode[KeyCode["SHIFT"] = 16] = "SHIFT";
        KeyCode[KeyCode["CTRL"] = 17] = "CTRL";
        KeyCode[KeyCode["ALT"] = 18] = "ALT";
        KeyCode[KeyCode["PAUSE"] = 19] = "PAUSE";
        KeyCode[KeyCode["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        KeyCode[KeyCode["ESCAPE"] = 27] = "ESCAPE";
        KeyCode[KeyCode["SPACE"] = 32] = "SPACE";
        KeyCode[KeyCode["PAGE_UP"] = 33] = "PAGE_UP";
        KeyCode[KeyCode["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        KeyCode[KeyCode["END"] = 35] = "END";
        KeyCode[KeyCode["HOME"] = 36] = "HOME";
        KeyCode[KeyCode["LEFT_ARROW"] = 37] = "LEFT_ARROW";
        KeyCode[KeyCode["UP_ARROW"] = 38] = "UP_ARROW";
        KeyCode[KeyCode["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
        KeyCode[KeyCode["DOWN_ARROW"] = 40] = "DOWN_ARROW";
        KeyCode[KeyCode["INSERT"] = 45] = "INSERT";
        KeyCode[KeyCode["DELETE"] = 46] = "DELETE";
        KeyCode[KeyCode["KEY_0"] = 48] = "KEY_0";
        KeyCode[KeyCode["KEY_1"] = 49] = "KEY_1";
        KeyCode[KeyCode["KEY_2"] = 50] = "KEY_2";
        KeyCode[KeyCode["KEY_3"] = 51] = "KEY_3";
        KeyCode[KeyCode["KEY_4"] = 52] = "KEY_4";
        KeyCode[KeyCode["KEY_5"] = 53] = "KEY_5";
        KeyCode[KeyCode["KEY_6"] = 54] = "KEY_6";
        KeyCode[KeyCode["KEY_7"] = 55] = "KEY_7";
        KeyCode[KeyCode["KEY_8"] = 56] = "KEY_8";
        KeyCode[KeyCode["KEY_9"] = 57] = "KEY_9";
        KeyCode[KeyCode["KEY_A"] = 65] = "KEY_A";
        KeyCode[KeyCode["KEY_B"] = 66] = "KEY_B";
        KeyCode[KeyCode["KEY_C"] = 67] = "KEY_C";
        KeyCode[KeyCode["KEY_D"] = 68] = "KEY_D";
        KeyCode[KeyCode["KEY_E"] = 69] = "KEY_E";
        KeyCode[KeyCode["KEY_F"] = 70] = "KEY_F";
        KeyCode[KeyCode["KEY_G"] = 71] = "KEY_G";
        KeyCode[KeyCode["KEY_H"] = 72] = "KEY_H";
        KeyCode[KeyCode["KEY_I"] = 73] = "KEY_I";
        KeyCode[KeyCode["KEY_J"] = 74] = "KEY_J";
        KeyCode[KeyCode["KEY_K"] = 75] = "KEY_K";
        KeyCode[KeyCode["KEY_L"] = 76] = "KEY_L";
        KeyCode[KeyCode["KEY_M"] = 77] = "KEY_M";
        KeyCode[KeyCode["KEY_N"] = 78] = "KEY_N";
        KeyCode[KeyCode["KEY_O"] = 79] = "KEY_O";
        KeyCode[KeyCode["KEY_P"] = 80] = "KEY_P";
        KeyCode[KeyCode["KEY_Q"] = 81] = "KEY_Q";
        KeyCode[KeyCode["KEY_R"] = 82] = "KEY_R";
        KeyCode[KeyCode["KEY_S"] = 83] = "KEY_S";
        KeyCode[KeyCode["KEY_T"] = 84] = "KEY_T";
        KeyCode[KeyCode["KEY_U"] = 85] = "KEY_U";
        KeyCode[KeyCode["KEY_V"] = 86] = "KEY_V";
        KeyCode[KeyCode["KEY_W"] = 87] = "KEY_W";
        KeyCode[KeyCode["KEY_X"] = 88] = "KEY_X";
        KeyCode[KeyCode["KEY_Y"] = 89] = "KEY_Y";
        KeyCode[KeyCode["KEY_Z"] = 90] = "KEY_Z";
        KeyCode[KeyCode["LEFT_META"] = 91] = "LEFT_META";
        KeyCode[KeyCode["RIGHT_META"] = 92] = "RIGHT_META";
        KeyCode[KeyCode["SELECT"] = 93] = "SELECT";
        KeyCode[KeyCode["NUMPAD_0"] = 96] = "NUMPAD_0";
        KeyCode[KeyCode["NUMPAD_1"] = 97] = "NUMPAD_1";
        KeyCode[KeyCode["NUMPAD_2"] = 98] = "NUMPAD_2";
        KeyCode[KeyCode["NUMPAD_3"] = 99] = "NUMPAD_3";
        KeyCode[KeyCode["NUMPAD_4"] = 100] = "NUMPAD_4";
        KeyCode[KeyCode["NUMPAD_5"] = 101] = "NUMPAD_5";
        KeyCode[KeyCode["NUMPAD_6"] = 102] = "NUMPAD_6";
        KeyCode[KeyCode["NUMPAD_7"] = 103] = "NUMPAD_7";
        KeyCode[KeyCode["NUMPAD_8"] = 104] = "NUMPAD_8";
        KeyCode[KeyCode["NUMPAD_9"] = 105] = "NUMPAD_9";
        KeyCode[KeyCode["MULTIPLY"] = 106] = "MULTIPLY";
        KeyCode[KeyCode["ADD"] = 107] = "ADD";
        KeyCode[KeyCode["SUBTRACT"] = 109] = "SUBTRACT";
        KeyCode[KeyCode["DECIMAL"] = 110] = "DECIMAL";
        KeyCode[KeyCode["DIVIDE"] = 111] = "DIVIDE";
        KeyCode[KeyCode["F1"] = 112] = "F1";
        KeyCode[KeyCode["F2"] = 113] = "F2";
        KeyCode[KeyCode["F3"] = 114] = "F3";
        KeyCode[KeyCode["F4"] = 115] = "F4";
        KeyCode[KeyCode["F5"] = 116] = "F5";
        KeyCode[KeyCode["F6"] = 117] = "F6";
        KeyCode[KeyCode["F7"] = 118] = "F7";
        KeyCode[KeyCode["F8"] = 119] = "F8";
        KeyCode[KeyCode["F9"] = 120] = "F9";
        KeyCode[KeyCode["F10"] = 121] = "F10";
        KeyCode[KeyCode["F11"] = 122] = "F11";
        KeyCode[KeyCode["F12"] = 123] = "F12";
        KeyCode[KeyCode["NUM_LOCK"] = 144] = "NUM_LOCK";
        KeyCode[KeyCode["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
        KeyCode[KeyCode["SEMICOLON"] = 186] = "SEMICOLON";
        KeyCode[KeyCode["EQUALS"] = 187] = "EQUALS";
        KeyCode[KeyCode["COMMA"] = 188] = "COMMA";
        KeyCode[KeyCode["DASH"] = 189] = "DASH";
        KeyCode[KeyCode["PERIOD"] = 190] = "PERIOD";
        KeyCode[KeyCode["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
        KeyCode[KeyCode["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
        KeyCode[KeyCode["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
        KeyCode[KeyCode["BACK_SLASH"] = 220] = "BACK_SLASH";
        KeyCode[KeyCode["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
        KeyCode[KeyCode["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
    })(KeyCode = dom.KeyCode || (dom.KeyCode = {}));
    dom.createElement = (tagName) => {
        return (document.createElement(tagName));
    };
    dom.DIV = () => {
        return dom.createElement('div');
    };
    dom.SPAN = () => {
        return dom.createElement('span');
    };
    dom.A = () => {
        return dom.createElement('a');
    };
    dom.INPUT = () => {
        return dom.createElement('input');
    };
    dom.TEXTAREA = () => {
        return dom.createElement('textarea');
    };
    dom.CANVAS = () => {
        return dom.createElement('canvas');
    };
    dom.IMG = () => {
        return dom.createElement('img');
    };
    dom.LABEL = () => {
        return dom.createElement('label');
    };
    dom.appendText = (text) => (node) => {
        return node.appendChild(document.createTextNode(text));
    };
    function setAttributes(elem, attrs) {
        Object.keys(attrs)
            .forEach((k) => {
            elem.setAttribute(k, attrs[k]);
        });
        return elem;
    }
    dom.setAttributes = setAttributes;
    function addClass(elem, c) {
        const ecStr = elem.getAttribute('class');
        const ec = ecStr ? ecStr.split(' ') : [];
        ec.push(c);
        elem.setAttribute('class', _.uniq(ec).join(' '));
    }
    dom.addClass = addClass;
    function toggleClass(elem, c) {
        const ecStr = elem.getAttribute('class');
        const ec = ecStr ? ecStr.split(' ') : [];
        if (_.indexOf(ec, c) < 0) {
            addClass(elem, c);
        }
        else {
            removeClass(elem, c);
        }
    }
    dom.toggleClass = toggleClass;
    function hasClass(elem, c) {
        const ecStr = elem.getAttribute('class');
        const ec = ecStr ? ecStr.split(' ') : [];
        return !(_.indexOf(ec, c) < 0);
    }
    dom.hasClass = hasClass;
    function removeClass(elem, c) {
        const ecStr = elem.getAttribute('class');
        const ec = ecStr ? ecStr.split(' ') : [];
        elem.setAttribute('class', _.without(ec, c).join(' '));
    }
    dom.removeClass = removeClass;
    function emptyElement(elem) {
        while (elem.firstChild) {
            removeElement(elem.firstChild);
        }
        return elem;
    }
    dom.emptyElement = emptyElement;
    function removeElement(elem, keepChildren = false) {
        if (!keepChildren) {
            emptyElement(elem);
        }
        const parent = elem.parentNode;
        const evt = document.createEvent('CustomEvent');
        if (parent) {
            parent.removeChild(elem);
        }
        evt.initCustomEvent('remove', false, false, null);
        elem.dispatchEvent(evt);
        return elem;
    }
    dom.removeElement = removeElement;
    function px(val = 0) {
        return `${val.toString()}px`;
    }
    dom.px = px;
    function makeButton(label, attrs, callback) {
        const button = dom.DIV();
        const labelElement = dom.SPAN();
        addClass(labelElement, 'label');
        labelElement.innerHTML = label;
        setAttributes(button, attrs);
        if (callback) {
            button.addEventListener('click', event => {
                callback(event);
            }, false);
        }
        button.appendChild(labelElement);
        return button;
    }
    dom.makeButton = makeButton;
    function makeInput(options, callback) {
        const inputElement = dom.INPUT();
        const labelElement = dom.LABEL();
        const wrapper = dom.DIV();
        const type = options.type;
        setAttributes(wrapper, options.attrs || {});
        labelElement.innerHTML = options.label;
        inputElement.setAttribute('type', type);
        inputElement.value = options.value;
        if (callback) {
            inputElement.addEventListener('change', () => {
                const val = inputElement.value;
                if ('number' === type) {
                    callback(Number(val));
                }
                else {
                    callback(val);
                }
            }, false);
        }
        wrapper.appendChild(labelElement);
        wrapper.appendChild(inputElement);
        return wrapper;
    }
    dom.makeInput = makeInput;
    function eventPreventer(elem, events) {
        _.each(events, eventName => {
            elem.addEventListener(eventName, e => {
                e.stopPropagation();
            }, false);
        });
    }
    dom.eventPreventer = eventPreventer;
    function getDomForModel(model, key, tagName = 'div', className) {
        const element = document.createElement(tagName);
        addClass(element, `model-fragment ${className}`);
        const getValue = (key) => {
            if ('name' === key) {
                return index_1.getModelName(model);
            }
            return JSON.stringify(model.get(key, 'nn'));
        };
        dom.appendText(getValue(key))(element);
        const updater = (changedKey) => {
            if (element && (key === changedKey)) {
                emptyElement(element);
                dom.appendText(getValue(key))(element);
            }
        };
        model.on('set', updater);
        element.addEventListener('remove', () => {
            model.removeAllListeners('set');
        }, false);
        return element;
    }
    dom.getDomForModel = getDomForModel;
})(dom = exports.dom || (exports.dom = {}));
