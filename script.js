var uis = [
  { name: "Login UI",
    original: "https://dribbble.com/shots/2125879-Day-001-Login-Form"
  },
  { name: "Product Card",
    original: "https://dribbble.com/shots/2127657-Day-002-Product-Card"
  },
  { name: "Phone UI",
    original: "https://dribbble.com/shots/2129422-Day-003-Dial-Pad"
  },
  {
    name: "Checkout Credit Card UI",
    original: "https://dribbble.com/shots/2131063-Day-004-Credit-Card-Payment"
  }
];

$(document).ready(function() {
  for(var i = 0; i < uis.length; i++) {
    $("#uilist").append('<li><a href="Day ' + (i + 1) + '/index.html">' + uis[i].name + '</a> based on <a href="' + uis[i].original + '">this dribble</a></li>');
  }
});
