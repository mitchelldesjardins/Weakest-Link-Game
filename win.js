//Mitchell Desjardins
//Assignment: The Weakest Link
//Date: April 10 2019

const apiinhtml = document.querySelector("#container1");
const xhr = new XMLHttpRequest(); 
const button = document.querySelector("#but");


button.addEventListener("click",function()
{

let endpoint = `https://api.giphy.com/v1/gifs/random?api_key=HFeA7pJJ4mVGUOS4KoAjwDsWnIsHaFOo`;

xhr.open("GET",endpoint);

xhr.send();

xhr.addEventListener("readystatechange",display)

});

function display() 
{
  if(xhr.readyState==4)
  {
    const jsonresponse = JSON.parse(xhr.responseText);
    const div = document.querySelector("#container1");

    div.innerHTML = ``
    const img = document.createElement("img");
   img.setAttribute("src",jsonresponse.data.images.fixed_height.url);
    div.appendChild(img);
  }

}