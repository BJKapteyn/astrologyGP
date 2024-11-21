export function buildSingleItemURL(itemID) {
    const bookURL = 'https://book.squareup.com/appointments/ysiif4g893rlw0/location/LP1D86FB8MBJ9/services/';

    return bookURL + itemID;
}

export function buildAzureFunctionURL(functionName, code) {
    const functionURL = `${process.env.REACT_APP_FUNCTIONS_URL}/${functionName}?code=${code}`;

    return functionURL;
}
