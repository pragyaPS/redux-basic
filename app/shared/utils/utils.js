  export const ajaxLoadData = (dataUrl, callback ) => {
    fetch(dataUrl, {mode: 'cors'}).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((responseData) => {
      if (callback) {
        callback(responseData);
      }
    });
  };
 