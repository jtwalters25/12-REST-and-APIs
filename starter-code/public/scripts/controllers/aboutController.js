'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

    // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // TODid: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.


  module.aboutController = aboutController;
})(window);
