// get all the image element on the page
let images = document.getElementsByTagName('img');

// loop through the image element
for(let i = 0; i < images.length; i++){
  chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
    images[index].src = data.link;
  });
}