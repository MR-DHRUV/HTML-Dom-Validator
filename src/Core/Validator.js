/**
*@author : Dhruv Gupta
*/
import { validateAttributes } from "./Helpers/Attributes";
import { convertDOMToObjects } from "./Helpers/General";
import { parseDomStructure } from "./Helpers/Parser";
import isHtml from 'is-html';

export default function resolveQueries(htmlString, queries) {

    // check if the html is valid
    if (!isHtml(htmlString)) {
        return ['Invalid HTML'];
    }

    // parse the dom
    const dom = parseDomStructure(htmlString);

    // convert the dom to objects
    const domObjects = convertDOMToObjects(dom);

    const errors = [];
    // console.log(dom)
    // console.log(domObjects)
    // console.log(queries)

    // creating a general function to resolve the queries
    function resolveQuery(domNode, queryNode, queryObjects, visited) {
        // now tag and attributes are already matched so we will serve the remaining attributes
        const attributes = queryNode.attributes;
        const tag = queryNode.tag;

        // resolving the matchIdK query
        if (attributes.matchIdK !== undefined) {

            const subQr = attributes.matchIdK.split(",");

            // check if this tag has kth child
            if (domNode.children.length < parseInt(subQr[0]) - 1) {
                errors.push(`Expected id of tag <${tag}> to be matching with '${subQr[0]}' child but this child does not exist`);
            }
            else {
                const kThChild = domObjects[domNode.children[parseInt(subQr[0]) - 1]];

                if (domNode.attributes.id === undefined || domNode.attributes.id !== kThChild.attributes.text.replace(/ /g, subQr[1])) {
                    errors.push(`Expected id of tag <${tag}> '${kThChild.attributes.text.replace(/ /g, subQr[1])}' but found '${domNode.attributes.id}'`);
                }
            }
        }

        // resolving the matchClassK query
        if (attributes.matchClassK !== undefined) {

            const subQr = attributes.matchClassK.split(",");

            // check if this tag has kth child
            if (domNode.children.length < parseInt(subQr[0]) - 1) {
                errors.push(`Expected a class of tag <${tag}> to be matching with '${subQr[0]}' child but this child does not exist`);
            }
            else {
                const kThChild = domObjects[domNode.children[parseInt(subQr[0]) - 1]];

                if (domNode.attributes.class === undefined || !domNode.attributes.class.includes(kThChild.attributes.text.replace(/ /g, subQr[1]))) {
                    errors.push(`Expected a class '${kThChild.attributes.text.replace(/ /g, subQr[1])}' in tag <${tag}> ${domNode.attributes?.id ? `with id '${domNode.attributes.id}'` : ``} but found ${domNode.attributes.class}`);
                }
            }
        }

        // matching the children if random order is allowed
        if (attributes.random !== undefined && attributes.random === "true") {

            if (queryNode.children.length > domNode.children.length) {
                errors.push(`Expected ${queryNode.children.length} children in tag <${tag}> ${domNode.attributes?.id ? `with id '${domNode.attributes.id}'` : domNode.attributes.class?.length > 0 ? `with class '${domNode.attributes.class}'` : ``} but found ${domNode.children.length}`);
            }
            else {
                const visited = { set: new Set() }; // to pass by reference
                let matchedChildren = 0;
                // for each children validate the tag and attributes, so for each children in query we will find them in dom and validate them recursively
                for (let i = 0; i < queryNode.children.length; i++) {

                    const child = queryObjects[queryNode.children[i]];

                    // find the matching tag in children of domNode
                    for (let j = 0; j < domNode.children.length; j++) {

                        if (visited.set.has(j)) continue; // skip the visited children

                        const domChild = domObjects[domNode.children[j]];

                        if ((domChild.tag === child.tag || (child.attributes.choice !== undefined && child.attributes.choice.includes(domChild.tag))) && validateAttributes(domChild.attributes, child.attributes).length === 0) {
                            // mark the child as visited
                            matchedChildren++;
                            visited.set.add(j);
                            resolveQuery(domChild, child, queryObjects,visited);
                            break;
                        }
                    }
                }

                if (matchedChildren !== queryNode.children.length) {
                    errors.push(`Expected ${queryNode.children.length} matching children in tag <${tag}> but found ${matchedChildren}`);
                }
            }


        }
        else {
            // match children in order
            if (queryNode.children.length > domNode.children.length) {
                errors.push(`Expected ${queryNode.children.length} children in tag <${tag}> ${domNode.attributes?.id ? `with id '${domNode.attributes.id}'` : domNode.attributes.class?.length > 0 ? `with class '${domNode.attributes.class}'` : ``} but found ${domNode.children.length}`);
            }
            else {
                for (let i = 0; i < queryNode.children.length; i++) {

                    const child = queryObjects[queryNode.children[i]];
                    const domChild = domObjects[domNode.children[i]];

                    if ((domChild.tag === child.tag || (child.attributes.choice !== undefined && child.attributes.choice.includes(domChild.tag)))) {

                        const validationErrors = validateAttributes(domChild.attributes, child.attributes);

                        if (validationErrors.length > 0) {
                            validationErrors.forEach(error => errors.push(`In tag <${domChild.tag}> ${domChild.attributes.id ? `with id '${domChild.attributes.id}'` : domChild.attributes.class?.length > 0 ? `with class '${domChild.attributes.class}'` : ``}: ${error}`));
                        }
                        else {
                            resolveQuery(domChild, child, queryObjects,visited);
                        }
                    }
                    else {
                        errors.push(`Expected tag <${child.tag}> ${child.attributes?.id ? `with id '${child.attributes.id}'` : child.attributes.class?.length > 0 ? `with class '${child.attributes.class}'` : ``} but found <${domChild.tag}> ${domChild.attributes?.id ? `with id '${domChild.attributes.id}'` : domChild.attributes.class?.length > 0 ? `with class '${domChild.attributes.class}'` : ``}`);

                        break;
                    }
                }
            }
        }
    }

    // now I will serve all the queries one by one
    for (let i = 0; i < queries.length; i++) {

        const query = queries[i].split('\n').filter(tag => tag.trim() !== ''); // Split rule by new lines and remove empty lines;
        if (query.length === 0) continue; // skip empty queries

        // simplifying the query by parsing it from convertDOMToObjects method
        const queryObjects = convertDOMToObjects(queries[i], true);
        if (typeof queryObjects === 'string') {
            errors.push(`Invalid query: ${queries[i]}`);
            continue;
        }

        const attributes = queryObjects[0].attributes;
        const tag = queryObjects[0].tag;

        // for any query first we will find the tag that matches the attributes pased in the query
        let domIndex = 0;
        let subt = 0;

        // Find the first matching tag in the DOM
        while (domIndex < domObjects.length) {

            const domTagMatch = domObjects[domIndex];

            // direct tag match or in a choice + attributes match
            if ((domTagMatch.tag === tag || (attributes.choice !== undefined && attributes.choice.includes(domTagMatch.tag))) && validateAttributes(domTagMatch.attributes, attributes).length === 0) {
                subt = domTagMatch.indent;
                break;
            }

            domIndex++;
        }

        // if starting tag not found serrve the next query
        if (domIndex >= domObjects.length) {
            errors.push(`Cannot find tag <${tag}> with attributes ${JSON.stringify(attributes)}`);
            continue;
        }

        // call the resolveQuery function to resolve the query
        // creating a recursive function will help in validating the children of the  more smoothly and easily
        const visited = { set: new Set() }; // to pass by reference
        resolveQuery(domObjects[domIndex], queryObjects[0], queryObjects, visited);
    }

    return errors.length === 0 ? ['All queries resolved successfully.'] : errors;
}
