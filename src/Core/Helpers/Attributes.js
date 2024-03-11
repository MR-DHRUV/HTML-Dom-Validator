/*
*@author : Dhruv Gupta
*/

// these attribute require separate processing
const ignoreTags = ['class', 'text', 'choice', 'queryK', 'matchClassK', 'matchIdK', 'random', 'hrefStartsWith'];

export function parseAttributes(attributeString) {
    const attributes = {};
    let match;

    // Regular expression to match key-value pairs
    const regex = /(\S+?)\s*=\s*["'](.*?)["']/g;

    while ((match = regex.exec(attributeString)) !== null) {
        const key = match[1];
        const value = match[2];

        // If the key is 'class', split the value into an array of classes
        if (key === 'class' || key === 'choice') {
            attributes[key] = value.trim().split(/\s+/);
        }
        // Else just remove extra spaces and add
        else {
            attributes[key] = value.trim();
        }
    }

    return attributes;
}

export function validateAttributes(domAttributes, ruleAttributes) {

    const errors = [];

    if (ruleAttributes.hasOwnProperty("class")) {

        if (!domAttributes.hasOwnProperty("class")) {
            domAttributes["class"] = [];
        }

        // Check if all classes in ruleAttributes are present in domAttributes
        const missingClasses = ruleAttributes.class.filter(className => !domAttributes.class.includes(className));
        if (missingClasses.length > 0) {
            errors.push(`Missing classes: ${missingClasses.join(', ')}`);
        }
    }

    // Convert text in ruleAttributes to regex
    if (ruleAttributes.hasOwnProperty("text")) {
        // dom will always have text, so no need to add check

        let ruleTextRegex = ruleAttributes.text;
        if (typeof ruleTextRegex === 'string') {
            ruleTextRegex = new RegExp(ruleTextRegex);
        }

        // Check if the text matches the regex (if specified)
        if (ruleTextRegex instanceof RegExp) {
            if (!ruleTextRegex.test(domAttributes.text)) {
                errors.push(`Attribute 'text' mismatch, Please use a valid value: '${ruleAttributes.text.toString()}'`);
            }
        } else {
            // Check if the text matches exactly
            if (domAttributes.text !== ruleAttributes.text) {
                errors.push(`Attribute 'text' mismatch: expected '${ruleAttributes.text}', got '${domAttributes.text}'`);
            }
        }
    }

    if (ruleAttributes.hasOwnProperty("hrefStartsWith")) {
        if (!domAttributes.hasOwnProperty("href")) {
            errors.push(`Missing attribute 'hrefStartsWith'`);
        }
        // Match URL with given prefix
        else if (!domAttributes["href"].startsWith(ruleAttributes["hrefStartsWith"])) {
            errors.push(`Attribute 'hrefStartsWith' mismatch: expected a value starting with '${ruleAttributes["hrefStartsWith"]}'`);
        }
    }

    // Check for any other attributes
    Object.keys(ruleAttributes).forEach(key => {
        if (!ignoreTags.includes(key)) {
            if (!domAttributes.hasOwnProperty(key)) {
                errors.push(`Missing attribute '${key}'`);
            } else if (domAttributes[key] !== ruleAttributes[key]) {
                errors.push(`Attribute '${key}' mismatch: expected '${ruleAttributes[key]}', got '${domAttributes[key]}'`);
            }
        }
    });

    return errors;
}

