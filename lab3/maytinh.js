var input = document.querySelector(".input");
var item = Array.from(document.querySelectorAll(".item"));



item.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (input.innerHTML === "0") input.innerHTML = "";
    if (btn.innerHTML == "AC") input.innerHTML = "0";
    else if (btn.innerHTML == "DEL") {
      var arrtext = Array.from(input.innerHTML);
      arrtext.splice(arrtext.length - 1, 1);
      if (arrtext.length != 0) input.innerHTML = arrtext.join("");
      else input.innerHTML = "0";
    } else if (btn.innerHTML == "=") {
      input.innerHTML = eval(input.innerHTML);
    } else if (btn.innerHTML == "x") {
      input.innerHTML += "*";
    } else if (btn.innerHTML == "÷") {
      input.innerHTML += "/";
    } else input.innerHTML += btn.innerHTML;
    {
    }
    
  });
});

window.addEventListener("keypress", (e) => {
  checkLengthInput()
  if (input.innerHTML === "0") input.innerHTML = "";
  if (e.key == "r") input.innerHTML = "0";
  else if (e.key == "d") {
    var arrtext = Array.from(input.innerHTML);
    arrtext.splice(arrtext.length - 1, 1);
    if (arrtext.length != 0) input.innerHTML = arrtext.join("");
    else input.innerHTML = "0";
  } else if (e.key == "Enter") {
    input.innerHTML = eval(input.innerHTML);
  } else if (e.key == "-") {
    input.innerHTML += "-";
  } else if (e.key == "+") {
    input.innerHTML += "+";
  } else if (e.key == "x") {
    input.innerHTML += "*";
  } else if (e.key == "÷") {
    input.innerHTML += "/";
  } else if (Number(e.key) || e.key == "0") {
    console.log(e.key);
    input.innerHTML += e.key;
  } else {
    input.innerHTML = input.innerText;
  }

  console.log(e.key);
});

const checkLengthInput = () => {
  console.log("run")
    // if(input.innerText.length > 8){
    //    input.innerText = input.innerText;
    // }
}