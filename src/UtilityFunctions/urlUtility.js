function buildUrlWithId(baseUrl, id) {
    if (!id) {
        return null;
    }

    return baseUrl + id;
}

export function buildSingleServiceItemURL(itemId) {
    const singleServiceItemUrl = 'https://book.squareup.com/appointments/ysiif4g893rlw0/location/LP1D86FB8MBJ9/services/';
    const bookUrl = buildUrlWithId(singleServiceItemUrl, itemId);

    return bookUrl;
}

export function buildTeamMemberBookingURL(itemId) {
    const teamMemberBookingUrl = 'https://book.squareup.com/appointments/ysiif4g893rlw0/location/LP1D86FB8MBJ9/services?buttonTextColor=c6abd2&color=c6abd2&locale=en&referrer=so&team_member_id=';
    const bookUrl = buildUrlWithId(teamMemberBookingUrl, itemId);

    return bookUrl;
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
