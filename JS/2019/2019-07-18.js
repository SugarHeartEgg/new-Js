var name = "Tom";
console.log(name);

(function () {
  console.log(name);
  if (typeof name == "undefined") {
    var name = "Jack"
    console.log("Goodbye " + name)
  } else { 
    console.log("Hello " + name)
  }
})();