// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require summernote

$(document).ready(function(){
   $('.summer-note').summernote({
    lang: 'en-EN',
    height: 500,
    callbacks:{
      onImageUpload: function(files) {
        sendFile(files[0],$(this));
      }
    }
  });
})

function sendFile(file, editor) {
  data = new FormData(file);
  data.append("file", file);
  console.log(editor)
  $.ajax({
    data: data,
    type: "POST",
    url: "/admin/pictures.json",
    dataType: "JSON",
    processData: false,
    contentType: false,
    success: function(data) {
      console.log(data)
      editor.summernote("insertImage",data['file']['url'], data['id'] );
    }
  });
}
