let inp = document.getElementById("pass");
let xeta = document.getElementById("xeta");
let icon = document.getElementById("icn");
function isle() {
icon.style.display ="inline"
  if (inp.type == "password") {
    inp.type = "text";
    icon.className = "fas fa-eye-slash";
  } else {
    inp.type = "password";
    icon.className = "far fa-eye";
  }
}

function test() {
  xeta.style.display = "inline";

  if (inp.value.length < 8) {
    xeta.innerHTML = "sifre zeifdir";
    xeta.className = "badge bg-danger";
  } else {
    xeta.innerHTML = "sifre gucludur";
    xeta.className = "badge bg-success";
  }
}

inp.onblur = function () {
  xeta.style.display = "none";
};

inp.onfocus = function () {
  if (inp.value.length >= 1) {
    xeta.style.display = "inline";
  }
};
