
    document.getElementsByClassName("tablink1")[0].click();

    function openCity1(evt, city1Name) {
  var i, x, tablinks;
    x = document.getElementsByClassName("city1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
  }
    tablinks = document.getElementsByClassName("tablink1");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
  }
    document.getElementById(city1Name).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}

document.getElementsByClassName("tablink2")[0].click();

function openCity2(evt, city2Name) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink2");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(city2Name).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}



