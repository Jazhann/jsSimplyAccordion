(function () {
    const Accordion = function (sections, options) {
        let errorFlag = false;
        let entryClass;

        /**
         * Text Constants
         */
        const CONSTANTS = {
            ACCORDION_ENTRY_CLASS: '.jsAccordion',
            ACCORDION_CLASS: 'accordion',
            SECTION_CLASS: 'accordion__section',
            CONTENT_CLASS: 'accordion__content',
            CONTENT_TEXT_CLASS: 'accordion__content__text',
            ACTIVE_CLASS: 'active',
            CONTENT: 'content',
            DATA_ARRAY_EMPTY_ERROR: 'Data argument can not be empty',
            DATA_MUST_BE_AN_ARRAY_ERROR: 'Data argument must be an array',
            DATA_OBJECT_ERROR: 'Data argument should be an object with keys: section and content, and string values',
            DIV_NAME_NOT_FOUND_ERROR: 'Entry class name not found',
            DD: 'dd',
            DL: 'dl',
            DT: 'dt',
            P: 'p',
            SECTION: 'section',
            STRING: 'string'
        }

        /**
         * Init method
         */
        const init = function() { 
            getOptions();
            
            try {
                if (!document.querySelector(entryClass)) {
                    throw new Error(CONSTANTS.DIV_NAME_NOT_FOUND_ERROR);
                }
                checkSectionsData(sections);
            } catch (error) {   
                errorFlag = true;
                console.error(error);
            }
            
            if (!errorFlag) {
                createDOMElements();
            }
        }

        /**
         * Process options param
         */
        const getOptions = function() {
            entryClass = options && options.hasOwnProperty('entryClass') && typeof options.entryClass === CONSTANTS.STRING ?
             options.entryClass :
             CONSTANTS.ACCORDION_ENTRY_CLASS;
        }
        
        /**
         * Check if errors in sections data
         */
        const checkSectionsData = function() {
            if (!Array.isArray(sections)) {
                throw new Error(CONSTANTS.DATA_MUST_BE_AN_ARRAY_ERROR)
            }
            if (!sections.length) {
                throw new Error(CONSTANTS.DATA_ARRAY_EMPTY_ERROR)
            }
            if (!checkSectionObject(sections)) {
                throw new Error(CONSTANTS.DATA_OBJECT_ERROR);
            }
        }
        
        /**
         * Check if section object has section and content fields and they are strings
         * @returns boolean
         */
        const checkSectionObject = function() {
            let valid;
            for (let sectionObject of sections) {
                valid = (sectionObject.hasOwnProperty(CONSTANTS.SECTION) && typeof sectionObject.section === CONSTANTS.STRING) &&
                        (sectionObject.hasOwnProperty(CONSTANTS.CONTENT) && typeof sectionObject.content === CONSTANTS.STRING);
            };
            return valid;
        }

        /**
         * Create accordion DOM elements
         */
        const createDOMElements = function() {
            let accordionWrapper = document.querySelector(entryClass);
            let DOMSectionsWrapper = document.createElement(CONSTANTS.DL);
            DOMSectionsWrapper.classList.add(CONSTANTS.ACCORDION_CLASS)
            for (let [i, sectionData] of sections.entries()) {
    
                let DOMSection = document.createElement(CONSTANTS.DT);
                DOMSection.innerHTML = sectionData.section;
                DOMSection.classList.add(CONSTANTS.SECTION_CLASS);
                DOMSection.index = i;
                DOMSection.addEventListener('click', toggle)
                DOMSectionsWrapper.appendChild(DOMSection);
                let DOMContent = document.createElement(CONSTANTS.DD);
                DOMContent.classList.add(CONSTANTS.CONTENT_CLASS);
                let DOMContentText = document.createElement(CONSTANTS.P);
                DOMContentText.innerHTML = sectionData.content;
                DOMContentText.classList.add(CONSTANTS.CONTENT_TEXT_CLASS)
                DOMContent.appendChild(DOMContentText);
                DOMSectionsWrapper.appendChild(DOMContent);
    
            }
            accordionWrapper.appendChild(DOMSectionsWrapper);
        }

        /**
         * Toggle a section
         * @param {*} event event or index;
         */
        toggle = function(event) {
            const index = typeof event !== 'number' ? event.currentTarget.index : event;
            const accSections = document.getElementsByClassName(CONSTANTS.SECTION_CLASS);
            for (let sectionElement of accSections) {
                contentElement = sectionElement.nextSibling;
                if (sectionElement.index === index && !sectionElement.classList.contains(CONSTANTS.ACTIVE_CLASS)) {
                    sectionElement.classList.add(CONSTANTS.ACTIVE_CLASS);
                    contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
                } else {
                    sectionElement.classList.remove(CONSTANTS.ACTIVE_CLASS);
                    contentElement.style.maxHeight = null;
                }
            }
        }

        this.toggle = toggle;

        init();
    }
    
    module.exports = Accordion;
})()



