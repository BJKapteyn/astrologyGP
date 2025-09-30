export const sendAPIPost = async (endpointUrl: string, requestBody: string): Promise<Response> => {
    let postResponse: Response;

    postResponse = await fetch(endpointUrl, {
      method: "post",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: requestBody
    })
    .then(response => {
      console.debug("Response received:", response);
      postResponse = response;

      return response.json();
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