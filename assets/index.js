window.onload = () =>  document.querySelector(".slider").style.backgroundImage = "url(assets/images/poster1.gif)"


//intalization
let i = 0

//burger
document.querySelector(".burger").addEventListener("click",navtoggle)
function navtoggle()
{
   let nav=document.querySelector(".navcontainer")
   nav.classList.toggle("navopen")
   console.log(nav);
}



//image slider
function changeslider()
{
   let images=["poster1.gif   ","poster2.gif","poster3.gif"]
   i = i < images.length ? i : 0;
  // console.log(i);
   document.querySelector(".slider").style.backgroundImage = "url(assets/images/"+ images[i]+")"

   ++i
}
setInterval(changeslider,2000)


//display filter
document.querySelector(".filterbutton").addEventListener("click",displayfilter)

function displayfilter()
{
   let filter  = document.querySelector(".filters")
   filter.classList.toggle("displayfilter")
   console.log(filter);
}


//hidefilter
document.querySelector(".goback").addEventListener("click",displayfilter)

function displayfilter()
{
   let filter  = document.querySelector(".filters")
   filter.classList.toggle("displayfilter")
}


//displaylogin
function displaylogin()
{
   document.querySelector(".modal").style.display="flex"
   return false
}
document.querySelector(".close").addEventListener("click",hidelogin)
function hidelogin()
{

   document.querySelector(".modal").style.display="none"

}


function changetoregister()
{
   let form = document.forms['loginform']
   //console.log(form);
   form.action = "register.js"
   document.querySelector(".modaltitle").innerHTML = "Register"
   let button = form.submit
  // console.log(button);
  button.value="Register"
  document.querySelector(".forgotpassword").style.display="none"
  document.querySelector(".createaccount").innerHTML="Have an account?..Login"
  document.querySelector(".createaccount").onclick= changetologin

  console.log(form);

   return false
}
function changetologin()
{
   let form = document.forms['loginform']
   //console.log(form);
   form.action = "login.js"
   document.querySelector(".modaltitle").innerHTML = "Login"
   let button = form.submit
  // console.log(button);
  button.value="Login"
  document.querySelector(".forgotpassword").style.display="block"
  document.querySelector(".createaccount").innerHTML="Don't Have? Create your own account"
  document.querySelector(".createaccount").onclick= changetoregister
   
  console.log(form);
   return false
}