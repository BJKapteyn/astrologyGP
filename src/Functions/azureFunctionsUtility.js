
export function buildURL(token, functionName) {
    const functionsURL = `${process.env.REACT_APP_FUNCTIONS_URL}/api/${functionName}?code=${token}`;
    
    return functionsURL;
}