export function buildSingleItemURL(itemId) {
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
