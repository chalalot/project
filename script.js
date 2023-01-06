function change() {
    const elements = document.querySelectorAll(".content");
    for (const element of elements) {
      element.classList.toggle("transformed-state");
    }
  }
  
  const changeButton = document.querySelector("#change");
  changeButton.addEventListener("click", change);
  
  
  var originalBorderColor = "white";

  const toggle = document.getElementById('toggleDark');
  toggle.addEventListener('click', function(){
      this.classList.toggle('bi-moon');
  });

  const toggle2 = document.getElementById('modeIndicator')
  toggle2.addEventListener("click", function(){
    toggle.classList.toggle('bi-moon')
  });



  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });

  document.getElementById("toggleDark").onclick = function() {
    var modeIndicator = document.getElementById("modeIndicator");
    if (modeIndicator.innerHTML === "Light mode") {
      modeIndicator.innerHTML = "Dark mode";
    } else {
      modeIndicator.innerHTML = "Light mode";
    }
  };

  var darkMode = localStorage.getItem("darkMode");


  if (darkMode === "true") {
    document.getElementById("modeIndicator").classList.add("dark-mode");
    document.getElementById("modeIndicator").innerHTML = "Dark mode";
  }

  document.getElementById("modeIndicator").onclick = function() {
    this.classList.toggle("dark-mode");
    if (this.classList.contains("dark-mode")) {
      this.innerHTML = "Dark mode";
      localStorage.setItem("darkMode", "true");
    } else {
      this.innerHTML = "Light mode";
      localStorage.setItem("darkMode", "false");
    }
  };

