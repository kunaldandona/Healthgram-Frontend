export function PostData(type, userData) {
  let BaseURL = `${"https://cors-anywhere.herokuapp.com/"}https://kunaldandona.com/php/`;

    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type.concat('/index.php'), {
            method: 'POST',
            body: JSON.stringify(userData),
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}