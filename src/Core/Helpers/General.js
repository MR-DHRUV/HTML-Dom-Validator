/**
*@author : Dhruv Gupta
*/
import { parseAttributes } from './Attributes';

function splitIndentTagAttr(loc) {
    return loc.match(/^(\s*)(\w+)(?:\(([^)]+)\))?/);
}

// Convert the attributes string to an object
// basically a tree stored in an array
export function convertDOMToObjects(dom, q=false) {
    
    const lines = dom.split('\n').filter(tag => tag.trim() !== '');
    const objects = [];
    const stack = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim() === '') continue;

        const [___, indent, tag, attr] = splitIndentTagAttr(line);
        
        if (q && (indent === undefined || tag === undefined)) {
            return `Invalid Query`
        }

        const attributes = parseAttributes(attr || {});
        const obj = { tag, attributes, children: [] };

        while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
            stack.pop();
        }

        if (stack.length > 0) {

            const parent = stack[stack.length - 1];
            objects[parent.index].children.push(objects.length);
        }

        stack.push({ indent, index: objects.length });
        objects.push(obj);
    }

    return objects;
}

