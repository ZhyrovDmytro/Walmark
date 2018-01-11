import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import { render, renderFactory } from './render';
import dropdown from './components/dropdown';
import progress from './components/progress';
import weight from './components/weight';
import liquid from './components/liquid';
import accordion from './components/accordion';

const app = (config) => {
    init(dropdown, document.getElementById('dropdown'));
    init(progress, document.getElementById('progress'));
    init(weight, document.querySelector('.health__weight'));
    init(liquid, document.querySelector('.health__liquid'));
    init(accordion, document.getElementById('accordion'));
};

app(null, window.config);
