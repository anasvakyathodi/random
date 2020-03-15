function ran_generator() {
    var limit = document.getElementById("text-input").value;
    var result = Math.floor((Math.random() * limit) + 1);
    document.getElementById("content").innerHTML=result;

}
