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
  var summernote_changed = false;

  $(window).bind('beforeunload', function(){
    if(summernote_changed){
      return 'Are you sure you want to leave you have made chages to the text?';
    }
  });

  $("form").submit(function(){
    $(window).unbind("beforeunload");
  });

   $('.summer-note').summernote({
    lang: 'en-EN',
    height: 500,
    callbacks:{
      onChange: function(contents, $editable) {
        summernote_changed = true;
      },
      onImageUpload: function(files) {
        sendFile(files[0],$(this));
      },
      onMediaDelete : function($target, editor, $editable) {
        console.log(); // img 
        var split = $target.attr('src').split( '/' )
        var id = split[split.length - 2]
        deletePicture(id)
        // remove element in editor 
        $target.remove();
      }
    }
  });
})

function deletePicture(id){
  $.ajax({
    type: "DELETE",
    url: $('form').attr('action') + id + "/delete_picture",
    success: function(data) {
      editor.summernote("insertImage",data['file']['url'], data['id'] );
    }
  });
}

function sendFile(file, editor) {
  data = new FormData(file);
  data.append("file", file);
  $.ajax({
    data: data,
    type: "PATCH",
    url: $('form').attr('action') + "/add_picture" ,
    dataType: "JSON",
    processData: false,
    contentType: false,
    success: function(data) {
      console.log(data)
      editor.summernote("insertImage",data['file']['url'], data['id'] );
    }
  });
}
