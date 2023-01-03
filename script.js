function change() {
    const elements = document.querySelectorAll(".box");
    for (const element of elements) {
      element.classList.toggle("transformed-state");
    }
  }
  
  const changeButton = document.querySelector("#change");
  changeButton.addEventListener("click", change);
  
  
  
  const toggle = document.getElementById('toggleDark');
  toggle.addEventListener('click', function(){
      this.classList.toggle('bi-moon');
  });

  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });
