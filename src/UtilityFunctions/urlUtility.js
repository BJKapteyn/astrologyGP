export function buildSingleServiceItemURL(itemId) {
    const bookUrl = 'https://book.squareup.com/appointments/ysiif4g893rlw0/location/LP1D86FB8MBJ9/services/';

    if(!itemId) {
        return null;
    }

    return bookUrl + itemId;
}

export function buildAzureFunctionURL(functionName, code) {
    const functionURL = `${process.env.REACT_APP_FUNCTIONS_URL}/${functionName}?code=${code}`;

    return functionURL;
}

/**
 * Extracts the item ID from a given URL path.
 *
 * @param {string} path - The URL path from which to extract the item ID.
 * @returns {string} The extracted item ID.
 */
export function getItemIdFromUrlPath(path) {
    const urlPaths = path.split('/');
    const itemUri = urlPaths[urlPaths.length - 1];
    const uriItemInformation = itemUri.split('-');
    const itemId = uriItemInformation[uriItemInformation.length - 1];

    return itemId;
}
