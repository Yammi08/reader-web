var videoHTML = (id,src)=>
{
    return `<div class='container-item'><video id="video-${id}" controls><source id="source-${id}" src="${src}" type="video/mp4"></video></div>`
}
var imageHTML = (id,src)=>
{
  return `<div class='container-item'><img id="image-${id}" src=${src}></div>`;
}
var TextHtml = (id,text)=>
{
  return `<div class='container-item'><div class='container-text'><h1 id = "text-${id}">${text}</h1></div></div>`;
}