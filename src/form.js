window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var form = document.getElementById('form-vector');

    // form model
    var fields = {
        reason: {
            type: "radio",
            value: "newElt",
            options: {
                newElt: {
                    x: 52,
                    y: 169.5,
                    type: "checkmark"
                },
                exchangeElt: {
                    x: 52.3,
                    y: 184.5,
                    type: "checkmark"
                },
                changeElt: {
                    x: 264.5,
                    y: 169.5,
                    type: "checkmark"
                }
            }
        },
        origin: {
            type: "radio",
            value: "",
            options: {
                domesticPlane: {
                    x: 370.5,
                    y: 244.4,
                    type: "checkmark"
                },
                foreignPlane: {
                    x: 370.7,
                    y: 256,
                    type: "checkmark"
                }
            }
        },
        typeManual: {
            x: 101.6,
            y: 273,
            type: "checkbox",
            value: false
        },
        typeAF: {
            x: 268,
            y: 273,
            type: "checkbox",
            selected: false
        },
        typeAD: {
            x: 101.6,
            y: 285.5,
            type: "checkbox",
            selected: false
        },
        typeS: {
            x: 266,
            y: 285.5,
            type: "checkbox",
            selected: false
        },
        typeAP: {
            x: 413.5,
            y: 273,
            type: "checkbox",
            selected: false
        },
        eltCount: {
            type: "text",
            x: 463,
            y: 293,
            width: 12,
            value: "1"
        },
        exchangeEltOldCode: {
            x: 377.8,
            y: 196.5,
            width: 210,
            height: 17,
            type: "code",
            value: "",
            letterSpacing: 3.4
        },
        eltCode: {
            x: 56,
            y: 323,
            width: 275,
            type: "code",
            value: "",
            letterSpacing: 7.4
        },
        manufacturer: {
            x: 113,
            y: 344.6,
            width: 105.2,
            type: "text",
            value: ""
        },
        model: {
            x: 251,
            y: 344.6,
            width: 128.1,
            type: "text",
            value: ""
        },
        sn: {
            x: 421,
            y: 344.6,
            width: 159,
            type: "text",
            value: ""
        },
        owner: {
            x: 162,
            y: 402.2,
            width: 414.5,
            type: "text",
            value: ""
        },
        address: {
            x: 91.4,
            y: 425.5,
            width: 486,
            type: "text",
            value: ""
        },
        phoneHome: {
            x: 92,
            y: 448.9,
            width: 123.3,
            type: "text",
            value: ""
        },
        phoneWork: {
            x: 285.3,
            y: 448.9,
            width: 129.7,
            type: "text",
            value: ""
        },
        cellphone: {
            x: 460,
            y: 448.9,
            width: 118.4,
            type: "text",
            value: ""
        },
        fax: {
            x: 84,
            y: 472.7,
            width: 87,
            type: "text",
            value: ""
        },
        firstEmail: {
            x: 213,
            y: 472.7,
            width: 148.5,
            type: "text",
            value: ""
        },
        secondEmail: {
            x: 405,
            y: 472.7,
            width: 175.5,
            type: "text",
            value: ""
        },
        contact1Name: {
            x: 197.5,
            y: 517,
            width: 118,
            type: "text",
            value: ""
        },
        contact1PhoneHome: {
            x: 197.5,
            y: 529,
            width: 118,
            type: "text",
            value: ""
        },
        contact1PhoneWork: {
            x: 197.5,
            y: 541,
            width: 118,
            type: "text",
            value: ""
        },
        contact1Cellphone: {
            x: 197.5,
            y: 553,
            width: 118,
            type: "text",
            value: ""
        },
        contact2Name: {
            x: 316.2,
            y: 517,
            width: 126.4,
            type: "text",
            value: ""
        },
        contact2PhoneHome: {
            x: 316.2,
            y: 529,
            width: 126.4,
            type: "text",
            value: ""
        },
        contact2PhoneWork: {
            x: 316.2,
            y: 541,
            width: 126.4,
            type: "text",
            value: ""
        },
        contact2Cellphone: {
            x: 316.2,
            y: 553,
            width: 126.4,
            type: "text",
            value: ""
        },
        contact3Name: {
            x: 443.3,
            y: 517,
            width: 134.3,
            type: "text",
            value: ""
        },
        contact3PhoneHome: {
            x: 443.3,
            y: 529,
            width: 134.3,
            type: "text",
            value: ""
        },
        contact3PhoneWork: {
            x: 443.3,
            y: 541,
            width: 134.3,
            type: "text",
            value: ""
        },
        contact3Cellphone: {
            x: 443.3,
            y: 553,
            width: 134.3,
            type: "text",
            value: ""
        },
        planeSign: {
            x: 134.9,
            y: 595.8,
            width: 91,
            type: "text",
            value: ""
        },
        planeType: {
            x: 290,
            y: 595.8,
            width: 102,
            type: "text",
            value: ""
        },
        planeBase: {
            x: 442,
            y: 595.8,
            width: 139,
            type: "text",
            value: ""
        },
        planeCode: {
            x: 52,
            y: 627.5,
            type: "code",
            width: 120,
            value: "",
            letterSpacing: 7.5
        },
        planeColor: {
            x: 154.5,
            y: 661,
            width: 428.1,
            type: "text",
            value: ""
        },
        satellitePhone: {
            x: 308,
            y: 682.5,
            width: 128.6,
            type: "text",
            value: ""
        },
        cellphoneOnboard: {
            x: 450,
            y: 682.5,
            width: 132.7,
            type: "text",
            value: ""
        },
        notes: {
            x: 103.4,
            y: 705,
            width: 479.5,
            type: "text",
            value: ""
        },
        name: {
            x: 336.3,
            y: 791.6,
            width: 121.5,
            type: "text",
            value: ""
        },
        date: {
            x: 123.7,
            y: 791.6,
            width: 100,
            type: "text",
            value: ""
        }
    };

    /**
     * Create a wrapper around @p element which will transform it to @p x @p y
     * @param {Number} x X coordinate of the element
     * @param {Number} y Y coordinate of the element
     * @param {Element} element SVG element which will be wrapped
     * 
     * @returns SVG element
     */
    var createFormFieldGroup = function(x, y, element) {
        var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
        group.setAttribute('class', 'form-field-content');
        group.appendChild(element);
        return group;
    };

    /**
     * Create checkmark at @p x @p y
     * 
     * @param x X coordinate of the checkmark
     * @param y Y coordinate of the checkmark
     * 
     * @returns SVG element
     */
    var createCheckMark = function(x, y) {
        var check = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        check.setAttribute('d', 'M0,0 L9,9 M9,0 L0,9');
        check.setAttribute('stroke', '#000');
        check.setAttribute('stroke-width', '0.9');
        check.setAttribute('fill', 'none');

        return createFormFieldGroup(x, y, check);
    };

    /**
     * Create a text field at @p x @p y with code formatting
     * 
     * @param x X coordinate of the checkmark
     * @param y Y coordinate of the checkmark
     * @param content Text content of the field
     * @param letterSpacing Letter spacing
     * 
     * @returns SVG element
     */
    var createCodeField = function(x, y, content, letterSpacing) {
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('fill', '#222');
        text.setAttribute('font-family', 'LiberationMono');

        var dxString = '0';
        for (var i = 1; i < content.length; ++i) {
            dxString += ' ' + letterSpacing
        }
        text.setAttribute('dx', dxString);
        text.textContent = content;

        return createFormFieldGroup(x, y, text);
    };

    /**
     * Create an ordinary text field which does not have any letter spacing requirements
     * 
     * @param x X coordinate of the checkmark
     * @param y Y coordinate of the checkmark
     * @param content Text content of the field
     * 
     * @returns SVG element
     */ 
    var createTextField = function(x, y, content) {
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('fill', '#222');
        text.setAttribute('font-family', 'LiberationSans');
        text.setAttribute('font-size', '0.6em');
        text.textContent = content;

        return createFormFieldGroup(x, y, text);
    };

    /**
     * Remove class from @p element
     * 
     * @param {HTMLElement} element HTML element
     * @param {String} className Name of the class which will be removed
     */
    var removeClass = function(element, className) {
        if (typeof element.classList !== 'undefined') {
            element.classList.remove(className);
        } else {
            var classes = element.getAttribute('class').split(' ');
            var classString = '';
            for (var name of classes) {
                if (name !== className) {
                    classString += name + ' ';
                }
            }
            element.setAttribute('class', classes);
        }
    };

    /**
     * Create a filled form vector as an SVG from a template.
     * 
     * @param {Element} template SVG form template
     * @param {Object} fields Field position, content and type
     * 
     * @returns new form (SVG root element)
     */
    var generateFilledFormSVG = function(template, fields) {
        // clone the template
        var form = template.cloneNode(true);
        form.removeAttribute('width');
        
        console.assert(form instanceof SVGElement);

        // the template is hidden, make sure the result is not
        removeClass(form, 'd-none');
        form.removeAttribute('id');

        // add new fields
        for (var key in fields) {
            var field = fields[key];

            if (field.type === "radio") {
                // no field is selected
                if (typeof field.value === "undefined") {
                    continue;
                }

                // find position of the selected field
                var selected = field.options[field.value];
                console.assert(typeof selected !== 'undefined');
                form.appendChild(createCheckMark(selected.x, selected.y));
            } else if (field.type === "checkbox") {
                if (field.value) { // selected
                    form.appendChild(createCheckMark(field.x, field.y));
                }
            } else if (field.type === "code") {
                form.appendChild(createCodeField(field.x, field.y, field.value, field.letterSpacing));
            } else if (field.type === "text") {
                form.appendChild(createTextField(field.x, field.y, field.value));
            }
        }

        return form;
    };

    /**
     * Generate PDF from SVG
     * 
     * @param {SVGElement} svg SVG root element
     * 
     * @returns promise
     */
    var generatePDFAsync = function(svg) {
        console.assert(svg instanceof SVGElement);

        /**
         * Embed font in PDF
         * 
         * @param {PDFDocument} doc 
         * @param {String} url Path to the font 
         * @param {String} name Font name 
         * 
         * @returns Promise
         */
        var registerFontAsync = function(doc, url, name) {
            return new Promise(function(resolve, reject) {
                io.loadAsync(url).then(function(font) {
                    doc.registerFont(name, font);
                    resolve();
                }).catch(function(e) {
                    reject(e);
                });
            });
        };

        var doc = new PDFDocument();

        return new Promise(function(resolve, reject) {
            // embed all fonts
            Promise.all([
                registerFontAsync(doc, './fonts/LiberationSerif-Regular.ttf', 'LiberationSerif'),
                registerFontAsync(doc, './fonts/LiberationSerif-Bold.ttf', 'LiberationSerif-Bold'),
                registerFontAsync(doc, './fonts/LiberationSerif-Italic.ttf', 'LiberationSerif-Italic'),
                registerFontAsync(doc, './fonts/LiberationMono-Regular.ttf', 'LiberationMono'),
                registerFontAsync(doc, './fonts/LiberationSans-Regular.ttf', 'LiberationSans'),
            ]).then(function() {
                // generate a PDF
                var chunks = [];
                doc.pipe({
                    write: function(chunk) { 
                        chunks.push(chunk); 
                    },
                    end: function() {
                        var blob = new Blob(chunks, {
                            type: 'application/pdf'
                        });
                        resolve(blob);
                    },
                    on: function(event, action) {},
                    once: function(args) {},
                    emit: function(args) {},
                });

                SVGtoPDF(doc, svg, 0, 0);

                doc.end();
            }).catch(function(e) {
                reject(e);
            });
        });
    };

    // The createEditableForm function will increment this global counter and
    // add it as a suffix to all input IDs so that we can have multiple copies 
    // of the same form.
    var formCounter = 0;

    /**
     * Create an editable form
     * 
     * @param {SVGElement} formTemplate Form as a vector 
     * @param {Element} inputsTemplate Template with form inputs
     * @param {Element} targetElement Target element where we'll add the editable form
     * @param {Object} fields Input fields and their positions
     */
    var createEditableForm = function(formTemplate, inputsTemplate, targetElement, fields) {
        console.assert(formTemplate instanceof SVGElement);
        console.assert(inputsTemplate instanceof Element);
        console.assert(targetElement instanceof Element);

        // copy templates and add them to the target
        var formCopy = formTemplate.cloneNode(true);
        var inputsCopy = inputsTemplate.cloneNode(true);
        formCopy.removeAttribute('id');
        removeClass(formCopy, 'd-none');
        inputsCopy.removeAttribute('id');
        removeClass(inputsCopy, 'd-none');

        // add template to the target element
        var inputsContainer = inputsCopy.getElementsByClassName('inputs')[0];
        inputsContainer.insertBefore(formCopy, inputsContainer.firstChild);
        targetElement.appendChild(inputsCopy);

        /**
         * Set values of @p inputs to values from @p model
         * 
         * @param {Object} inputs Colelction of HTML inputs
         * @param {Object} model Model with input values
         */
        var setInputValues = function(inputs, model) {
            for (var input of inputs) {
                var name = input.getAttribute('name');
                if (input.getAttribute('type') === 'radio') {
                    if (input.getAttribute('value') === model[name].value) {
                        input.checked = true;
                    }
                } else if (input.getAttribute('type') === 'checkbox') {
                    input.checked = model[name].value;
                } else { // text input
                    input.setAttribute('value', model[name].value);
                }   
            }
        };

        /**
         * Set position of all inputs in the view (@p inputs) according to data in @p model
         * 
         * @param {Object} inputs Collection of HTML inputs
         * @param {Object} model Model with input positions
         */
        var setInputPosition = function(inputs, model) {
            // template viewport
            var viewportWidth = 595.32;
            var viewportHeight = 841.92;
            // offset of radio button label
            var labelXOffset = 10;

            // translate a point in SVG to a point in HTML
            var convertXUnits = function(value) {
                return ((value / viewportWidth) * 100)  + '%';
            };

            var convertYUnits = function(value) {
                return ((value / viewportHeight) * 100)  + '%';
            };

            for (var input of inputs) {
                var field = model[input.name];
                var x = 0;
                var y = 0;
                if (field.type === 'radio' || field.type === 'checkbox') {
                    var option = field;
                    if (field.type === 'radio') {
                        option = field.options[input.value];
                    }
                    x = option.x;
                    y = option.y;

                    // find label
                    var label = input.nextElementSibling;
                    console.assert(label.tagName.toLowerCase() === 'label');
                    label.style.left = convertXUnits(x + labelXOffset);
                    label.style.top = convertYUnits(y);
                } else { // text field/checkbox, adjust width/height
                    x = field.x;
                    y = field.y;
                    input.style.width = convertXUnits(field.width);
                    input.style.height = convertYUnits(field.height);
                }

                input.style.left = convertXUnits(x);
                input.style.top = convertYUnits(y);
            }
        };

        /**
         * Fetch input values from view (@p inputs) and set values in @p model
         * 
         * @param {Object} inputs Collection of HTML inputs
         * @param {Object} model Model with input values
         */
        var fetchInputValues = function(inputs, model) {
            // set values in the model
            for (var input of inputs) {
                var field = model[input.getAttribute('name')];
                console.assert(typeof field === 'object');

                // convert code field values to upper case
                if (field.type === "code") {
                    input.value = input.value.toUpperCase();
                }

                if (input.getAttribute('type') === 'checkbox') {
                    field.value = input.checked;
                } else if (input.getAttribute('type') !== 'radio' || input.checked) {
                    // don't set the value if the input is an unckeded radio
                    field.value = input.value;
                } 
            }
        };
        
        /**
         * Add prefix to all input IDs so that we can use multiple copies of the same form.
         * 
         * @param {Object} inputs Collection of HTML inputs
         * @param {Object} labels Colleciton of HTML labels
         */
        var addSuffixToIDs = function(inputs, labels) {
            var idSuffix = formCounter++;

            // add suffix to labels
            for (var label of labels) {
                label.setAttribute('for', label.getAttribute('for') + idSuffix);
            }

            // add suffix to inputs
            for (var input of inputs) {
                if (input.getAttribute('id')) {
                    input.setAttribute('id', input.getAttribute('id') + idSuffix);
                }
            }
        };

        /**
         * Make some additional fields required
         * 
         * @param {Object} inputs Collection of HTML inputs
         * @param {Array} requiredList List of input names which should be required
         */
        var makeFieldsRequired = function(inputs, requiredList) {
            for (var input of inputs) {
                if (requiredList.includes(input.getAttribute('name'))) {
                    input.setAttribute('required', '');
                }
            }
        };
        
        /**
         * Set custom input validation messages based on input data-invalid attribute
         * 
         * @param {Object} inputs Collection of HTML inputs
         */
        var setInputValudationMessages = function(inputs) {
            for (var input of inputs) {
                // Show custom validation messages
                input.addEventListener('invalid', function(e) {
                    e.preventDefault();
                    return;
                });
            }
        };

        /**
         * Disable all submit buttons.
         * 
         * @param {Object} buttons Collection of all HTML submit buttons
         */
        var startLoading = function(buttons) {
            for (var button of buttons) {
                button.disabled = true;
            }
        };

        /**
         * Enable all submit buttons.
         * 
         * @param {Object} buttons Collection of all HTML submit buttons
         */
        var stopLoading = function(buttons) {
            for (var button of buttons) {
                button.disabled = false;
            }
        };

        /**
         * Take validation message from data-invalid attribute of @p input and show it to the user.
         * 
         * @param {HTMLElement} input Input HTML element
         */
        var showValidationMessage = function(input) {
            // show an error message (gathered from data-invalid attribute)
            $(input)
                .focus()
                .popover({
                    content: input.dataset.invalid,
                    placement: 'bottom',
                    trigger: 'focus'
                }).popover('show');

            // get rid of the popover when the input changes
            input.addEventListener('input', function() {
                $(input).popover('dispose');
            });
        };

        /**
         * Make sure @p form is valid.
         * 
         * If a field is not valid, this function displays an error message to the user.
         * 
         * @param {HTMLElement} form HTML form
         * @param {Object} inputs Collection of inputs from @p form
         * 
         * @returns true iff @p form is valid
         */
        var validateInput = function(form, inputs) {
            // check that user selected at least 1 type
            var names = ['typeManual', 'typeAF', 'typeAP', 'typeAD', 'typeS'];
            var lastInput = null;
            var checkCount = 0;
            for (var input of inputs) {
                var name = input.getAttribute('name');
                if (names.includes(name)) {
                    if (input.checked) {
                        ++checkCount;
                    }
                    lastInput = input; 
                }
            }

            // if there is no type selected
            if (checkCount <= 0) {
                showValidationMessage(lastInput);
                return false;
            }

            if (form.checkValidity()) {
                return true;
            }

            // find the first invalid input
            var invalidInput = null;
            for (var input of inputs) {
                if (!input.checkValidity()) {
                    invalidInput = input;
                    break;
                }
            }

            showValidationMessage(invalidInput);
        };

        // parse the required data attribute
        var additionalRequiredInputs = [];
        if (targetElement.dataset.required) {
            additionalRequiredInputs = targetElement.dataset.required.split(',');
        }

        // parse default field values from data attributes
        for (var field in targetElement.dataset) {
            if (fields[field]) {
                fields[field].value = targetElement.dataset[field];
            }
        }

        // initialize date with current date 
        var addLeadingZero = function(value) {
            if (value < 10) {
                return '0' + value;
            }
            return value;
        };

        var today = new Date();
        var year = today.getFullYear();
        var month = addLeadingZero(today.getMonth() + 1);
        var day = addLeadingZero(today.getDate());
        fields.date.value = year + '-' + month + '-' + day;

        // initialize view with values from model
        var labels = inputsContainer.getElementsByTagName('label');
        var inputs = inputsContainer.getElementsByTagName('input');

        setInputValues(inputs, fields);
        setInputPosition(inputs, fields);
        setInputValudationMessages(inputs);
        addSuffixToIDs(inputs, labels);
        makeFieldsRequired(inputs, additionalRequiredInputs);

        // submit form
        inputsCopy.addEventListener('submit', function(e) {
            e.preventDefault();

            // check validity
            var inputs = inputsContainer.getElementsByTagName('input');
            if (!validateInput(this, inputs)) {
                return;
            }

            // start loading 
            var buttons = inputsCopy.getElementsByTagName('button');
            startLoading(buttons);
            try {
                // fetch all input values from view
                fetchInputValues(inputs, fields);

                // generate a new form as a vector
                var svg = generateFilledFormSVG(formTemplate, fields);

                // convert it to PDF
                generatePDFAsync(svg)
                    .then(function(blob) {
                        var filename = 'formular.pdf';
                        if (typeof window.navigator.msSaveOrOpenBlob !== 'undefined') {
                            window.navigator.msSaveOrOpenBlob(blob, filename);
                        } else {
                            var url = URL.createObjectURL(blob);
                            io.download(url, filename);
                        }
                    });
            } finally {
                stopLoading(buttons);
            }
        });
    };

    /**
     * Make a deep copy of an object
     * 
     * @param {Object} object An object
     * 
     * @returns deep copy of the object
     */
    var makeDeepCopy = function(object) {
        if (typeof object !== 'object') {
            return object;
        }

        var result = {};
        for (var key in object) {
            result[key] = makeDeepCopy(object[key]);
        }
        return result;
    };

    var formTemplate = document.getElementById('form-vector-template');
    var inputsTemplate = document.getElementById('form-input-template');
    
    var forms = document.getElementsByClassName('form-target');
    for (var form of forms) {
        createEditableForm(formTemplate, inputsTemplate, form, makeDeepCopy(fields));
    }
});