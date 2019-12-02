import config from '/config/config'
export default {
  $http(url, method, data) {
    return new Promise(function(resolve, reject) {
      dd.httpRequest({
        url: config.BASE_URL+url,
        method: method,
        data: data,
        success: (res) => {
          if (res.status == 200) {
            resolve(res);
          } else {
            reject(res);
          }
        },
        fail: () => {
          reject();
        }
      })
    })
  }
}