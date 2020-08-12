window.io = (function() {
    'use strict';

    return {
        /**
         * Open download dialog for @p url
         * 
         * @param {String} url URL address of a resource 
         * @param {String} name Name of the resource
         */
        download: function(url, name) {
            var link = document.createElement('a');
            link.href = url;
            link.download = name;
            link.click();
        },

        /**
         * Create an AJAX GET request 
         * 
         * @param {String} url page URL
         * 
         * @returns Promise
         */
        loadAsync: function(url) {
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer';

                xhr.onload = function (e) {
                    if (this.status == 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.statusText);
                    }
                };
                xhr.onerror = function() {
                    reject(xhr.statusText);
                };

                xhr.send();
            });
        },
    };
})();