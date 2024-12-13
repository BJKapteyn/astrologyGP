export function squareGet(endpointURL, isActive) {
    let items = null;

    const getAllItems = async () => {
        await fetch(endpointURL)
            .then(response => response.json())
            .then(responseData => {
                if (isActive){
                    items = responseData;
                }
            })
            .catch(err => console.debug(err));
    }

    getAllItems();

    return items;
}

export function squarePost(endpointURL, requestBody, isActive) {
    let items = null;
    
    const getAllItems = async () => {
        await fetch(endpointURL, {
                method: "post",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },

                body: JSON.stringify(requestBody)
            })
            .then(response => response.json())
            .then(responseData => {
                if (isActive){
                    items = responseData;
                }
            })
            .catch(err => console.debug(err));
    }
    
    getAllItems();

    return items;
}