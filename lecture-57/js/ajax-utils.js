// (function (global) {
// 
// // Set up a namespace for our utility
// var ajaxUtils = {};
// 
// 
// // Returns an HTTP request object
// function getRequestObject() {
//   if (global.XMLHttpRequest) {
//     return (new XMLHttpRequest());
//   } 
//   else if (global.ActiveXObject) {
//     // For very old IE browsers (optional)
//     return (new ActiveXObject("Microsoft.XMLHTTP"));
//   } 
//   else {
//     global.alert("Ajax is not supported!");
//     return(null); 
//   }
// }
// 
// 
// // Makes an Ajax GET request to 'requestUrl'
// ajaxUtils.sendGetRequest = 
//   function(requestUrl, responseHandler) {
//     var request = getRequestObject();
//     request.onreadystatechange = 
//       function() { 
//         handleResponse(request, responseHandler); 
//       };
//     request.open("GET", requestUrl, true);
//     request.send(null); // for POST only
//   };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
// function handleResponse(request,
//                        responseHandler) {
//  if ((request.readyState == 4) &&
//     (request.status == 200)) {
//    responseHandler(request);
//  }
// }


// Expose utility to the global object
// global.$ajaxUtils = ajaxUtils;


// })(window);





(function (window) {
  // Set up a namespace for our utility
  var ajaxUtils = {};
  // Returns an HTTP request object
  function getbrowser () {                       // getbrowser is another name for getRequestObject
    if (global.XMLHttpRequest) {
      return (new XMLHttpRequest());
    }
    else if (ActiveXObject) {
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else {
      global.alert("Ajax is not supported!");
      return (null);
    }
  }
  // Makes an Ajax GET request to 'requestUrl'
  ajaxUtils.sendgetBrowser =                     // sendgetBrowser instead of sendGetRequest
  function (requestUrl, dealer) {                // responseHandler is dealer in my object
    var request = getbrowser();
    request.onreadystatechange = 
    function () {
      deal (request, responseHandler);           // handleResponse is simply deal here 
    };
    request.open("Get", requestUrl, true);
    request.send(null);   // for POST only
  };
  function deal (request, dealer) {
  if ((request.readyState == 4) && (request.status == 200)) {
    dealer(request);
    } 
  }
}
       
  window.$ajaxUtils = ajaxUtils;

)(window);

