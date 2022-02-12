# jsSimplyAccordion
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

`jsSimplyAccordion` 
is a library that implement a simply accordion using ES6.

## Install

### NPM
```bash
# bash
npm i js_simply_accordion
```

```js
const jsAccordion = require("jsAccordion"); 
// or
import { jsAccordion } from 'jsAccordion';
```

## Use

### Params
- accordionData: [{section: string, content: string}]
- options: {entryClass: string} default class '.jsAccordion'

```js
import { jsAccordion } from 'jsAccordion';
import 'jsAccordion/dist/accordion.css';

const accordionData = [
  {section: 'My section 1', content: 'My content 1'},
  {section: 'My section 2', content: 'My content 2'}
]

const options =  {entryClass: '.myEntryClass'}

const accordion = new Accordion(accordionData, options);
```


### Methods

- toggle


## jsAccordion.toggle

> Toggle a section by section index


## Example

```javascript
import { jsAccordion } from 'jsAccordion';
import 'jsAccordion/dist/accordion.css';

const accordionData = [
  {section: 'My section 1', content: 'My content 1'},
  {section: 'My section 2', content: 'My content 2'}
]


const accordion = new Accordion(AccordionData);

accordion.toggle(0);
```


### Source Code
[accordion()](https://github.com/Jazhann/jsSimplyAccordion)

## Contribution Notes
Clone project on [github](https://github.com/Jazhann/jsSimplyAccordion)
### Install libraries
```bash
npm i
```

### Build 
```bash
npm run build
```

### Tests 
```bash
npm run test
```

### Open Pull Request
Make changes and create a merge request.
