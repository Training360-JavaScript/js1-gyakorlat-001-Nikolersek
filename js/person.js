'use strict';

const { paperFormats } = require("puppeteer")

const personDataLog = ( {firstname = "John", lastname = "Doe", age = 33 } = {}) => "My name is " + firstname + " " + lastname + ". I'm " + age + " years old.";
