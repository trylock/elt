window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Overlays input fiels from #form-input-template over the ELT form in SVG #form-vector-template.
  // Form inputs are mached with fields based on their ID attribute.

  var vectorTemplate = document.getElementById("form-vector-template");
  var viewportWidth = parseFloat(vectorTemplate.getAttribute("width"));
  var viewportHeight = parseFloat(vectorTemplate.getAttribute("height"));
  console.assert(typeof viewportWidth !== "undefined");
  console.assert(typeof viewportHeight !== "undefined");

  // form model
  var fields = {
    reason: {
      type: "radio",
      value: "newElt",
      options: {
        newElt: {
          x: 70,
          y: 244,
          type: "checkmark",
        },
        exchangeElt: {
          x: 70,
          y: 264,
          type: "checkmark",
        },
        changeElt: {
          x: 361,
          y: 244,
          type: "checkmark",
        },
      },
    },
    origin: {
      type: "radio",
      value: "",
      options: {
        domesticPlane: {
          x: 495,
          y: 344,
          type: "checkmark",
        },
        foreignPlane: {
          x: 495,
          y: 359,
          type: "checkmark",
        },
      },
    },
    typeManual: {
      x: 136,
      y: 382,
      type: "checkbox",
      value: false,
    },
    typeAF: {
      x: 324,
      y: 382,
      type: "checkbox",
      selected: false,
    },
    typeAD: {
      x: 136,
      y: 398,
      type: "checkbox",
      selected: false,
    },
    typeS: {
      x: 324,
      y: 398,
      type: "checkbox",
      selected: false,
    },
    typeAP: {
      x: 496,
      y: 382,
      type: "checkbox",
      selected: false,
    },
    eltCount: {
      type: "text",
      x: 499,
      y: 407,
      width: 12,
      value: "1",
    },
    exchangeEltOldCode: {
      x: 505,
      y: 279,
      width: 275,
      height: 23,
      type: "code",
      value: "",
      letterSpacing: 7.8,
    },
    eltCode: {
      x: 75,
      y: 447,
      width: 355,
      type: "code",
      value: "",
      letterSpacing: 13.2,
    },
    manufacturer: {
      x: 150,
      y: 476,
      width: 140,
      type: "text",
      value: "",
    },
    model: {
      x: 335,
      y: 476,
      width: 170,
      type: "text",
      value: "",
    },
    sn: {
      x: 560,
      y: 476,
      width: 212,
      type: "text",
      value: "",
    },
    owner: {
      x: 217,
      y: 533,
      width: 551,
      type: "text",
      value: "",
    },
    address: {
      x: 122,
      y: 564,
      width: 648,
      type: "text",
      value: "",
    },
    phoneHome: {
      x: 123,
      y: 596,
      width: 165,
      type: "text",
      value: "",
    },
    phoneWork: {
      x: 380,
      y: 596,
      width: 173,
      type: "text",
      value: "",
    },
    cellphone: {
      x: 615,
      y: 596,
      width: 157,
      type: "text",
      value: "",
    },
    fax: {
      x: 112,
      y: 627,
      width: 117,
      type: "text",
      value: "",
    },
    firstEmail: {
      x: 285,
      y: 627,
      width: 198,
      type: "text",
      value: "",
    },
    secondEmail: {
      x: 540,
      y: 627,
      width: 235,
      type: "text",
      value: "",
    },
    contact1Name: {
      x: 264,
      y: 686,
      width: 156,
      type: "text",
      value: "",
    },
    contact1PhoneHome: {
      x: 264,
      y: 702,
      width: 156,
      type: "text",
      value: "",
    },
    contact1PhoneWork: {
      x: 264,
      y: 718,
      width: 156,
      type: "text",
      value: "",
    },
    contact1Cellphone: {
      x: 264,
      y: 734,
      width: 156,
      type: "text",
      value: "",
    },
    contact2Name: {
      x: 421,
      y: 686,
      width: 170,
      type: "text",
      value: "",
    },
    contact2PhoneHome: {
      x: 421,
      y: 702,
      width: 170,
      type: "text",
      value: "",
    },
    contact2PhoneWork: {
      x: 421,
      y: 718,
      width: 170,
      type: "text",
      value: "",
    },
    contact2Cellphone: {
      x: 421,
      y: 734,
      width: 170,
      type: "text",
      value: "",
    },
    contact3Name: {
      x: 590,
      y: 686,
      width: 180,
      type: "text",
      value: "",
    },
    contact3PhoneHome: {
      x: 590,
      y: 702,
      width: 180,
      type: "text",
      value: "",
    },
    contact3PhoneWork: {
      x: 590,
      y: 718,
      width: 180,
      type: "text",
      value: "",
    },
    contact3Cellphone: {
      x: 590,
      y: 734,
      width: 180,
      type: "text",
      value: "",
    },
    planeSign: {
      x: 180,
      y: 791,
      width: 120,
      type: "text",
      value: "",
    },
    planeType: {
      x: 388,
      y: 791,
      width: 133,
      type: "text",
      value: "",
    },
    planeBase: {
      x: 589,
      y: 791,
      width: 188,
      type: "text",
      value: "",
    },
    planeCode: {
      x: 70,
      y: 834,
      type: "code",
      width: 153,
      value: "",
      letterSpacing: 13.5,
    },
    planeColor: {
      x: 207,
      y: 871,
      width: 570,
      type: "text",
      value: "",
    },
    satellitePhone: {
      x: 420,
      y: 905,
      width: 355,
      type: "text",
      value: "",
    },
    parachute: {
      x: 70,
      y: 918,
      type: "checkbox",
      selected: false,
    },
    name: {
      x: 460,
      y: 1030,
      width: 210,
      type: "text",
      value: "",
    },
    date: {
      x: 174,
      y: 1030,
      width: 142,
      type: "text",
      value: "",
    },
  };

  var createFormFieldGroup = function (x, y, element) {
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("transform", "translate(" + x + ", " + y + ")");
    group.setAttribute("class", "form-field-content");
    group.appendChild(element);
    return group;
  };

  var createCheckMark = function (x, y) {
    var check = document.createElementNS("http://www.w3.org/2000/svg", "path");
    check.setAttribute("d", "M0,0 L12,12 M12,0 L0,12");
    check.setAttribute("stroke", "#000");
    check.setAttribute("stroke-width", "0.9");
    check.setAttribute("fill", "none");

    return createFormFieldGroup(x, y, check);
  };

  var createCodeField = function (x, y, content, letterSpacing) {
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("fill", "#222");
    text.setAttribute("font-family", "LiberationMono");

    var dxString = "0";
    for (var i = 1; i < content.length; ++i) {
      dxString += " " + letterSpacing;
    }
    text.setAttribute("dx", dxString);
    text.textContent = content;

    return createFormFieldGroup(x, y, text);
  };

  /**
   * Create an ordinary text field which does not have any letter spacing requirements
   */
  var createTextField = function (x, y, content) {
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("fill", "#222");
    text.setAttribute("font-family", "LiberationSans");
    text.setAttribute("font-size", "0.6em");
    text.textContent = content;

    return createFormFieldGroup(x, y, text);
  };

  var removeClass = function (element, className) {
    if (typeof element.classList !== "undefined") {
      element.classList.remove(className);
    } else {
      var classes = element.getAttribute("class").split(" ");
      var classString = "";
      for (var name of classes) {
        if (name !== className) {
          classString += name + " ";
        }
      }
      element.setAttribute("class", classes);
    }
  };

  /**
   * Create a filled form vector as an SVG from a template.
   * @returns new form (SVG root element)
   */
  var generateFilledFormSVG = function (template, fields) {
    var form = template.cloneNode(true);
    form.removeAttribute("width");

    console.assert(form instanceof SVGElement);

    // the template is hidden, make sure the result is not
    removeClass(form, "d-none");
    form.removeAttribute("id");

    for (var key in fields) {
      var field = fields[key];

      if (field.type === "radio") {
        // no field is selected
        if (typeof field.value === "undefined") {
          continue;
        }

        // find position of the selected field
        var selected = field.options[field.value];
        console.assert(typeof selected !== "undefined");
        form.appendChild(createCheckMark(selected.x, selected.y));
      } else if (field.type === "checkbox") {
        if (field.value) {
          // selected
          form.appendChild(createCheckMark(field.x, field.y));
        }
      } else if (field.type === "code") {
        form.appendChild(
          createCodeField(field.x, field.y, field.value, field.letterSpacing),
        );
      } else if (field.type === "text") {
        form.appendChild(createTextField(field.x, field.y, field.value));
      }
    }

    return form;
  };

  /**
   * Generate PDF from SVG
   */
  var generatePDFAsync = function (svg) {
    console.assert(svg instanceof SVGElement);

    /**
     * Embed font in PDF
     */
    var registerFontAsync = function (doc, url, name) {
      return new Promise(function (resolve, reject) {
        io.loadAsync(url)
          .then(function (font) {
            doc.registerFont(name, font);
            resolve();
          })
          .catch(function (e) {
            reject(e);
          });
      });
    };

    var doc = new PDFDocument();

    return new Promise(function (resolve, reject) {
      // embed all fonts
      Promise.all([
        registerFontAsync(
          doc,
          "./fonts/LiberationSerif-Regular.ttf",
          "LiberationSerif",
        ),
        registerFontAsync(
          doc,
          "./fonts/LiberationSerif-Bold.ttf",
          "LiberationSerif-Bold",
        ),
        registerFontAsync(
          doc,
          "./fonts/LiberationSerif-Italic.ttf",
          "LiberationSerif-Italic",
        ),
        registerFontAsync(
          doc,
          "./fonts/LiberationMono-Regular.ttf",
          "LiberationMono",
        ),
        registerFontAsync(
          doc,
          "./fonts/LiberationSans-Regular.ttf",
          "LiberationSans",
        ),
      ])
        .then(function () {
          // generate a PDF
          var chunks = [];
          doc.pipe({
            write: function (chunk) {
              chunks.push(chunk);
            },
            end: function () {
              var blob = new Blob(chunks, {
                type: "application/pdf",
              });
              resolve(blob);
            },
            on: function (event, action) {},
            once: function (args) {},
            emit: function (args) {},
          });

          SVGtoPDF(doc, svg, 0, 0);

          doc.end();
        })
        .catch(function (e) {
          reject(e);
        });
    });
  };

  // The createEditableForm function will increment this global counter and
  // add it as a suffix to all input IDs so that we can have multiple copies
  // of the ELT form.
  var formCounter = 0;

  /**
   * Create an editable form
   */
  var createEditableForm = function (
    formTemplate,
    inputsTemplate,
    targetElement,
    fields,
  ) {
    console.assert(formTemplate instanceof SVGElement);
    console.assert(inputsTemplate instanceof Element);
    console.assert(targetElement instanceof Element);

    // copy templates and add them to the target
    var formCopy = formTemplate.cloneNode(true);
    var inputsCopy = inputsTemplate.cloneNode(true);
    formCopy.removeAttribute("id");
    removeClass(formCopy, "d-none");
    inputsCopy.removeAttribute("id");
    removeClass(inputsCopy, "d-none");

    // add template to the target element
    var inputsContainer = inputsCopy.getElementsByClassName("inputs")[0];
    inputsContainer.insertBefore(formCopy, inputsContainer.firstChild);
    targetElement.appendChild(inputsCopy);

    /**
     * Set values of @p inputs to values from @p model
     */
    var setInputValues = function (inputs, model) {
      for (var input of inputs) {
        var name = input.getAttribute("name");
        if (input.getAttribute("type") === "radio") {
          if (input.getAttribute("value") === model[name].value) {
            input.checked = true;
          }
        } else if (input.getAttribute("type") === "checkbox") {
          input.checked = model[name].value;
        } else {
          // text input
          input.setAttribute("value", model[name].value);
        }
      }
    };

    /**
     * Set position of all inputs in the view (@p inputs) according to data in @p model
     */
    var setInputPosition = function (inputs, model) {
      // offset of radio button label
      var labelXOffset = 10;

      var convertXUnits = function (value) {
        return (value / viewportWidth) * 100 + "%";
      };

      var convertYUnits = function (value) {
        return (value / viewportHeight) * 100 + "%";
      };

      for (var input of inputs) {
        var field = model[input.name];
        var x = 0;
        var y = 0;
        if (field.type === "radio" || field.type === "checkbox") {
          var option = field;
          if (field.type === "radio") {
            option = field.options[input.value];
          }
          x = option.x;
          y = option.y;

          // find label
          var label = input.nextElementSibling;
          console.assert(label.tagName.toLowerCase() === "label");
          label.style.left = convertXUnits(x + labelXOffset);
          label.style.top = convertYUnits(y);
        } else {
          // text field/checkbox, adjust width/height
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
     */
    var fetchInputValues = function (inputs, model) {
      // set values in the model
      for (var input of inputs) {
        var field = model[input.getAttribute("name")];
        console.assert(typeof field === "object");

        // convert code field values to upper case
        if (field.type === "code") {
          input.value = input.value.toUpperCase();
        }

        if (input.getAttribute("type") === "checkbox") {
          field.value = input.checked;
        } else if (input.getAttribute("type") !== "radio" || input.checked) {
          // don't set the value if the input is an unckeded radio
          field.value = input.value;
        }
      }
    };

    /**
     * Make some additional fields required
     */
    var makeFieldsRequired = function (inputs, requiredList) {
      for (var input of inputs) {
        if (requiredList.includes(input.getAttribute("name"))) {
          input.setAttribute("required", "");
        }
      }
    };

    /**
     * Set custom input validation messages based on input data-invalid attribute
     */
    var setInputValudationMessages = function (inputs) {
      for (var input of inputs) {
        // Show custom validation messages
        input.addEventListener("invalid", function (e) {
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
    var startLoading = function (buttons) {
      for (var button of buttons) {
        button.disabled = true;
      }
    };

    /**
     * Enable all submit buttons.
     *
     * @param {Object} buttons Collection of all HTML submit buttons
     */
    var stopLoading = function (buttons) {
      for (var button of buttons) {
        button.disabled = false;
      }
    };

    /**
     * Take validation message from data-invalid attribute of @p input and show it to the user.
     */
    var showValidationMessage = function (input) {
      // show an error message (gathered from data-invalid attribute)
      $(input)
        .focus()
        .popover({
          content: input.dataset.invalid,
          placement: "bottom",
          trigger: "focus",
        })
        .popover("show");

      // get rid of the popover when the input changes
      input.addEventListener("input", function () {
        $(input).popover("dispose");
      });
    };

    /**
     * Make sure @p form is valid.
     *
     * If a field is not valid, this function displays an error message to the user.
     */
    var validateInput = function (form, inputs) {
      // check that user selected at least 1 type
      var names = ["typeManual", "typeAF", "typeAP", "typeAD", "typeS"];
      var lastInput = null;
      var checkCount = 0;
      for (var input of inputs) {
        var name = input.getAttribute("name");
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

    var requireAtLeastOne = function (inputA, inputB) {
      var atLeastOneRequired = function (e) {
        if (inputB.value.length <= 0 || inputA.value.length > 0) {
          inputA.setAttribute("required", "required");
        } else {
          inputA.removeAttribute("required");
        }

        if (inputA.value.length <= 0 || inputB.value.length > 0) {
          inputB.setAttribute("required", "required");
        } else {
          inputB.removeAttribute("required");
        }
      };
      inputA.addEventListener("input", atLeastOneRequired);
      inputB.addEventListener("input", atLeastOneRequired);
      atLeastOneRequired(null);
    };

    // parse the required data attribute
    var additionalRequiredInputs = [];
    if (targetElement.dataset.required) {
      additionalRequiredInputs = targetElement.dataset.required.split(",");
    }

    // parse default field values from data attributes
    for (var field in targetElement.dataset) {
      if (fields[field]) {
        fields[field].value = targetElement.dataset[field];
      }
    }

    // initialize date with current date
    var addLeadingZero = function (value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;;
    };

    var today = new Date();
    var year = today.getFullYear();
    var month = addLeadingZero(today.getMonth() + 1);
    var day = addLeadingZero(today.getDate());
    fields.date.value = year + "-" + month + "-" + day;

    // initialize view with values from model
    var labels = inputsContainer.getElementsByTagName("label");
    var inputs = inputsContainer.getElementsByTagName("input");

    // add suffix to IDs so we can have multiple copies of this form
    var idSuffix = formCounter++;
    for (var label of labels) {
      label.setAttribute("for", label.getAttribute("for") + idSuffix);
    }
    for (var input of inputs) {
      if (input.getAttribute("id")) {
        input.setAttribute("id", input.getAttribute("id") + idSuffix);
      }
    }

    // store values to local storage
    for (var input of inputs) {
      input.addEventListener("change", function (e) {
        var name = e.target.getAttribute("id");
        localStorage.setItem(name, e.target.value);
      });
    }

    // load values from local storage
    for (var input of inputs) {
      var name = input.getAttribute("id");
      var type = input.getAttribute("type");
      if (typeof name == "undefined" || name === null || name == "date" || type == "checkbox" || type == "radio") {
        continue;
      }
      // remove form ID suffix
      var fieldName = name.slice(0, name.length - 1)
      var storedValue = localStorage.getItem(name);
      if (storedValue !== null) {
        fields[fieldName].value = storedValue;
      }
    }

    setInputValues(inputs, fields);
    setInputPosition(inputs, fields);
    setInputValudationMessages(inputs);

    // some fields are required only in this form
    for (var input of inputs) {
      if (additionalRequiredInputs.includes(input.getAttribute("name"))) {
        input.setAttribute("required", "");
      }
    }

    var planeCode = null;
    var planeSign = null;
    for (var input of inputs) {
      if (input.getAttribute("name") === "planeCode") {
        planeCode = input;
      } else if (input.getAttribute("name") === "planeSign") {
        planeSign = input;
      }
    }
    requireAtLeastOne(planeCode, planeSign);

    // submit form
    inputsCopy.addEventListener("submit", function (e) {
      e.preventDefault();

      // check validity
      var inputs = inputsContainer.getElementsByTagName("input");
      if (!validateInput(this, inputs)) {
        return;
      }

      // start loading
      var buttons = inputsCopy.getElementsByTagName("button");
      startLoading(buttons);
      try {
        // fetch all input values from view
        fetchInputValues(inputs, fields);

        var svg = generateFilledFormSVG(formTemplate, fields);

        generatePDFAsync(svg).then(function (blob) {
          var filename = "formular.pdf";
          if (typeof window.navigator.msSaveOrOpenBlob !== "undefined") {
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

  var makeDeepCopy = function (object) {
    if (typeof object !== "object") {
      return object;
    }

    var result = {};
    for (var key in object) {
      result[key] = makeDeepCopy(object[key]);
    }
    return result;
  };

  var formTemplate = document.getElementById("form-vector-template");
  var inputsTemplate = document.getElementById("form-input-template");

  var forms = document.getElementsByClassName("form-target");
  for (var form of forms) {
    createEditableForm(
      formTemplate,
      inputsTemplate,
      form,
      makeDeepCopy(fields),
    );
  }
});
