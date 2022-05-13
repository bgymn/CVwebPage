require(["esri/Map", "esri/views/SceneView"], function(Map, SceneView)  {
        
        const map = new Map({
          basemap: "dark-gray-vector"
        });

        const view = new SceneView({
          container: "viewDiv",
          map: map,
          zoom: 4
        });


        document
          .getElementById("bounceCOS")
          .addEventListener("click", function () {
            view
              .goTo(
                {
                  center: [-104.8214, 38.8339],
                  zoom:8
                
                })
              .catch(catchAbortError);
            });
          
           document
          .getElementById("bounceOH")
          .addEventListener("click", function () {
            view
              .goTo(
                {
                  center: [-84.5120, 39.1031],
                  zoom:6
                
                })
              .catch(catchAbortError);
            });
          
           document
          .getElementById("bounceITY")
          .addEventListener("click", function () {
            view
              .goTo(
                {
                  center: [12.3155, 45.4408],
                  zoom:6
                
                })
              .catch(catchAbortError);
            });
          
           document
          .getElementById("bounceHOL")
          .addEventListener("click", function () {
            view
              .goTo(
                {
                  center: [4.9041, 52.3676],
                  zoom:6
                
                })
              .catch(catchAbortError);
            });
          
           document
          .getElementById("bounceGNP")
          .addEventListener("click", function () {
            view
              .goTo(
                {
                  center: [-113.7870, 48.7596],
                  zoom:6
                
                })
              .catch(catchAbortError);
            });
      });
   