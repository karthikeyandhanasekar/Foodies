window.onload = () =>  document.querySelector(".slider").style.backgroundImage = "url(assets/images/poster1.jpg)"


document.querySelector(".burger").addEventListener("click",navtoggle)
function navtoggle()
{
   let nav=document.querySelector(".navcontainer")
   nav.classList.toggle("navopen")
   console.log(nav);
}

let i = 0


function changeslider()
{
   let images=["poster1.jpg","poster2.gif","poster3.gif"]
   i = i < images.length ? i : 0;
   console.log(i);
   document.querySelector(".slider").style.backgroundImage = "url(assets/images/"+ images[i]+")"

   ++i
}
setInterval(changeslider,2000)

document.querySelector(".filterbutton").addEventListener("click",displayfilter)

function displayfilter()
{
   let filter  = document.querySelector(".filters")
   filter.classList.toggle("displayfilter")
   console.log(filter);
}

document.querySelector(".goback").addEventListener("click",displayfilter)

function displayfilter()
{
   let filter  = document.querySelector(".filters")
   filter.classList.toggle("displayfilter")
}
