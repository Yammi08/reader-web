var loadVideo = (item)=>
{
  var src = item.target.result;
  
  cVideos[0].innerHTML += videoHTML(id,src);
  var video = document.getElementById('video-'+id);
  video.load();
}
var loadImage = (item)=>
{
  var src = item.target.result;
  cVideos[0].innerHTML += imageHTML(id,src);
}
var loadText = (item)=>
{
  var src = item.target.result;
  cVideos[0].innerHTML += TextHtml(id,src);
}
var archiveCode = 
{
  'image': loadImage,
  'text': loadText,
  'video':loadVideo
}