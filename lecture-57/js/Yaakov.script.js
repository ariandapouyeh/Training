document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        var self = this;
        var name = "";

        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("/data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + self.name + "!</h2>";
            });

        
      });
  }
);