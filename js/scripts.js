function ran_generator() {
    if ((document.getElementById("text-input").value) <= 0) {
      alert("Input a valid number");
      document.getElementById("content").innerHTML=0;
    }
    else {
      var limit = document.getElementById("text-input").value;
      var result = Math.floor((Math.random() * limit) + 1);
      document.getElementById("content").innerHTML=result;
    }
}
function clr_all(){
  var x = window.confirm("Thank You for using...!\nDo you want to continue ?");
  if (x) {
    document.getElementById("text-input").value="";
    document.getElementById("content").innerHTML=0;
  }
  else {
    window.close();
  }
}
