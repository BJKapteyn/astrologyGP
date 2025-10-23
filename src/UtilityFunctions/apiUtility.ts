export const sendAPIPost = async (endpointUrl: string, requestBody: string, contentType: string = 'application/json'): Promise<Response> => {
    let postResponse: Response = {} as Response;

    await fetch(endpointUrl, {
      method: "post",
      headers: {
          'Accept': 'application/json',
          'Content-Type': contentType
      },
      body: requestBody
    })
    .then(response => {
      console.debug("Response received:", response);
      postResponse = response;
    })
    .catch(err => console.debug(err));

    return postResponse;
}

export const alertAPIResponse = (response: Response, successAction: (() => void) | null = null, successMessage: string = 'Operation Successful') => {
  if (response?.ok) {
    alert(successMessage);
    successAction && successAction();
  } else {
    alert('Something went wrong, please try again later...');
    window.location.reload();
  }
};