const Accordion = require('../accordion');
const accordionDataMock = [
    {
        section: 'Section Mock',
        content: 'Content Mock'
    }
];

describe('Error tests', () => {

    beforeEach(() => {
        const el = document.createElement('div');
        el.className = 'jsAccordion';
        document.body.appendChild(el);
    })

    afterEach(() => {
        const el = document.querySelector('div');
        el.remove();
    })

    test('It should get Entry class name not found error', () => {
        document.querySelector('div').className = 'mock';
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        new Accordion(accordionDataMock);
        expect(consoleSpy).toHaveBeenCalledWith(new Error('Entry class name not found'));
    })

    test('It should get Data argument must be an array', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        new Accordion('data');
        expect(consoleSpy).toHaveBeenCalledWith(new Error('Data argument must be an array'));
    })

    test('It should get Data argument can not be empty', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        new Accordion([]);
        expect(consoleSpy).toHaveBeenCalledWith(new Error('Data argument must be an array'));
    })

    test('It should get Data argument should be an object with keys: section and content, and string values', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        new Accordion([{section: 'a', content: 123}]);
        expect(consoleSpy).toHaveBeenCalledWith(new Error('Data argument should be an object with keys: section and content, and string values'));
    })

    test('It should get Data argument should be an object with keys: section and content, and string values', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        new Accordion([{section: 'a'}]);
        expect(consoleSpy).toHaveBeenCalledWith(new Error('Data argument should be an object with keys: section and content, and string values'));
    })

})

describe('Functionalty tests', () => {
    beforeEach(() => {
        const el = document.createElement('div');
        el.className = 'jsAccordion';
        document.body.appendChild(el);
    })

    afterEach(() => {
        const el = document.querySelector('div');
        el.remove();
    })

    test('It should create accordion', () => {
        new Accordion(accordionDataMock);
        const accordion = document.getElementsByClassName('accordion');
        expect(accordion.length).toEqual(1);
    })

    test('It should create accordion with custom entry class', () => {
        document.querySelector('div').className = 'mock';
        new Accordion(accordionDataMock, {entryClass: '.mock'});
        const accordion = document.getElementsByClassName('accordion');
        expect(accordion.length).toEqual(1);
    })

    test('It should toggle section to active', () => {
        const accordion = new Accordion(accordionDataMock);
        accordion.toggle(0);
        const el = document.getElementsByClassName('accordion__section');
        expect(el[0].classList.contains('active')).toBeTruthy();
    })

    test('It should toggle section to not active', () => {
        const accordion = new Accordion(accordionDataMock);
        accordion.toggle(0);
        accordion.toggle(0);
        const el = document.getElementsByClassName('accordion__section');
        expect(el[0].classList.contains('active')).toBeFalsy();
    })
})