// In this file you initialize and configure your experiment using magpieInit

$("document")
  .ready(function () {
    // prevent scrolling when space is pressed
    window.onkeydown = function (e) {
      if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
      }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
      // You have to specify all views you want to use in this experiment and the order of them
      views_seq: [
            intro,
            instructions,
            main_block,
            post_test,
            thanks,
        ],
      // Here, you can specify all information for the deployment
      deploy: {
        experimentID: "6",
          serverAppURL: "https://mcmpact.ikw.uni-osnabrueck.de/magpie/api/submit_experiment/",
        // Possible deployment methods are:
        // "debug" and "directLink"
        // As well as "MTurk", "MTurkSandbox" and "Prolific"
        deployMethod: "debug",
        contact_email: "michael.franke@uni-osnabrueck.de",
          prolificURL: "https://app.prolific.co/submissions/complete?cc=77210434"
      },
      // Here, you can specify how the progress bar should look like
      progress_bar: {
        in: [
              // list the view-names of the views for which you want a progress bar
              main_block.name,
            ],
        // Possible styles are "default", "separate" and "chunks"
        style: "separate",
        width: 100
      }
    });
  });
