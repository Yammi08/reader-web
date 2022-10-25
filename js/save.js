
var element = document.getElementById('archive');
var cVideos = document.getElementsByClassName('container');
var reader = new FileReader();
var id = 0;
var getForm = ()=>
{
    var file = element.files[0];
    var type = file.type.split('/');
    if(file == undefined)
      return;
    reader.onload = (item)=>
    {
      
      archiveCode[type[0]](item);
      id++;
    }
    if(type[0] == 'text')
    {
      reader.readAsText(file);
    }
    else
    {
      reader.readAsDataURL(file);
    }
    element.value = '';
}
/*
  var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
*/