

export  const StorageService = {
    setDataToLocalStorage: function (name, data, callback) {

        localStorage.setItem(name, JSON.stringify(data));
        
    },
    getDataFromLocalStorage: function (name, callback) {
       
      callback( JSON.parse(localStorage.getItem(name))) ;
    }
}