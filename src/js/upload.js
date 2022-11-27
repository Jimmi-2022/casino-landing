$("#verborgen_file").hide();
$("#uploadButton").on("click", function () {
  $("#verborgen_file").click();
});
///add the file
$("#verborgen_file").change(function () {
  var file = this.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    $("#pf_foto").css("background-image", 'url("' + reader.result + '")');
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
});

/// delete the file
///add the file
$("#deleteButton").click(function () {
  $("#pf_foto").css("background-image", 'url("../img/person.svg")');
});
