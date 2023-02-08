// Variables
const btns = document.querySelectorAll('.menu-btn');
const likebtn = document.querySelectorAll('.likebtn');
const toggles = document.querySelectorAll('.msg-toggle');

// Left side menu
btns.forEach(btn => {
  btn.addEventListener('click', ()=>{
    removeClasses();
    btn.classList.add('active');

    // Toggle Notification menu
    const np = document.querySelector('.notification-popup');
    if(btn.classList.contains('notification-btn')){
      if(np.classList.contains('visiblemenu')){
        np.style.opacity = "0";
        np.style.transform = "translateX(-487px)";
        np.classList.remove('visiblemenu');
        console.log(np.classList.contains('visiblemenu'));
      }
      else{
        np.style.opacity = "1";
        np.style.transform = "translateX(0)";
        np.classList.add('visiblemenu');
        console.log(np.classList.contains('visiblemenu'));
      }
    }
  })
})

function removeClasses(){
  btns.forEach(btn =>{
    btn.classList.remove('active');
  })
}

// Like button
likebtn.forEach(likeb =>{
  likeb.addEventListener('click', ()=>{
    if(likeb.classList.contains('liked')){
      likeb.classList.remove('liked');
    }
    else{
      likeb.classList.add('liked');
    }
  })
})

//Toggles
toggles.forEach(toggle =>{
  toggle.addEventListener('click', ()=>{
    rmclasstoggle();
    toggle.classList.add('activek');
  })
})

// remove toggle classes 
function rmclasstoggle(){
  toggles.forEach(toggle =>{
    toggle.classList.remove('activek');
  })
}