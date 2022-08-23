
let newSelect = document.getElementById("outputUnit");
let select = document.getElementById("inputUnit");
let convertBtn= document.getElementById('convert')
var result  = document.getElementById("display");
var valueSpace = document.getElementById("input")
  // if (select.value != newSelect.value) {
  //   convertBtn.disabled = false;
  // } else {
  //   console.log("enable");
  // }
convertBtn.addEventListener('click', ()=>{

// meter conversion
 if (select.value === "meter" && newSelect.value === "feet") {
   let finalResult;
   finalResult = Math.round(valueSpace.value * 3.2808);
   result.value = finalResult;
 } else if (select.value === "feet" && newSelect.value === "meter") {
   let finalResult;
   finalResult = Math.round(valueSpace.value / 3.2808);
   result.value = finalResult;
  //  feet conversion
 } else if (select.value === "feet" && newSelect.value === "inches") {
   let finalResult;
   finalResult = Math.round(valueSpace.value * 12);
   result.value = finalResult;
 } else if (select.value === "inches" && newSelect.value === "feet") {
   let finalResult;
   finalResult = Math.round(valueSpace.value / 12);
   result.value = finalResult;

  //  cm conversion
 } else if (select.value === "feet" && newSelect.value === "cm") {
  
   let finalResult;
   finalResult = Math.round(valueSpace.value / 0.032808);
   result.value = finalResult;
 } else if (select.value === "cm" && newSelect.value === "feet") {
   let finalResult;
   finalResult = Math.round(valueSpace.value * 0.032808);
   result.value = finalResult;
   //inches conversion
 } else if (select.value === "meter" && newSelect.value === "inches") {
   let finalResult;
   finalResult = Math.round(valueSpace.value * 39.3701);
   result.value = finalResult;
 } else if (select.value === "inches" && newSelect.value === "meter") {
   let finalResult;
   finalResult = Math.round(valueSpace.value / 39.3701);
   result.value = finalResult;

   //cm conversion
 } else if (select.value === "meter" && newSelect.value === "cm") {
   let finalResult;
   finalResult = Math.round(valueSpace.value * 100);
   result.value = finalResult;
 } else if (select.value === "cm" && newSelect.value === "meter") {
   let finalResult;
   finalResult = Math.round(valueSpace.value / 100);
   result.value = finalResult;
   //
 }
 
})



