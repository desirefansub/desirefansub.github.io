
    document.getElementsByClassName("tablink1")[0].click();

function openPrograma1(evt, programa1Name) {
  var i, x, tablinks;
  x = document.getElementsByClassName("programa1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
  }
    tablinks = document.getElementsByClassName("tablink1");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(programa1Name).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}




document.getElementsByClassName("tablink2")[0].click();

function openPrograma2(evt, programa2Name) {
  var i, x, tablinks;
  x = document.getElementsByClassName("programa2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink2");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(programa2Name).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}






