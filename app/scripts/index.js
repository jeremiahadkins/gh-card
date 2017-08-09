let $ = require('jquery');
let handlebars = require('handlebars');

init();

function printProfileInfo(profile) {
  var $userProfile = $('#gh-profile');
  var source = $('#gh-profile-info').html();
  var template = handlebars.compile(source);

  $userProfile.append(template(profile));
  console.log(profile);
}

function init() {
  fetch('https://api.github.com/users/jeremiahadkins').then(function(response) {
    return response.json();
  }).then(function(data) {
      printProfileInfo(data);
  });
}

