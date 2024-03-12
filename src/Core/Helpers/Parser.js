/**
*@author : Dhruv Gupta
*/
import { JSDOM } from 'jsdom';

// Convert the HTML string to a DOM structure
export function parseDomStructure(htmlString) {
    
    /// check its syntax TODO
    const dom = new JSDOM(htmlString);
    const rootNode = dom.window.document.documentElement;
    let output = "";

    // function to recursively extract DOM structure
    function extractDomStructure(node, indent = 0) {
        
        // Extract the tag name and attributes
        const tagName = node.tagName.toLowerCase();
        const attributes = Array.from(node.attributes)
            .map(attr => `${attr.name}="${attr.value}"`)
            .join(' ');
        
        // Adding the indent to denote the level of nesting
        const prefix = '    '.repeat(indent);

        let textContent = node.childNodes.length > 0 && node.childNodes[0].nodeType === 3 ? node.childNodes[0].textContent.trim().replace(/\s+/g, ' ') : '';
        output += (`${prefix}${tagName}${attributes ? `(${attributes}` : '('} text="${textContent}")\n`);

        // Recursively extract the structure of child nodes
        if (node.childNodes.length > 0) {
            node.childNodes.forEach(childNode => {
                if (childNode.nodeType === 1) {
                    extractDomStructure(childNode, indent + 1);
                }
            });
        }
    }

    // Call the function to start extracting DOM structure
    extractDomStructure(rootNode);

    return output;
} 

