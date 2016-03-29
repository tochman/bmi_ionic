function BMICalculator(){
};

BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

BMICalculator.prototype.imperial_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = (weight * 703 ) / (height * height);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};
function setBMIMessage (obj, value){
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight"
    obj.bmiPicture = "img/xs.jpeg"
    obj.bmiBrief = "Skinny is not the new sexy anymore my friend!, maybe more exercise and enriched diet will take you to the next level"
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"
    obj.bmiPicture = "img/m.png"
    obj.bmiBrief = "Normal, does not means perfect, some finetunning here and there ... but you almost there"
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
    obj.bmiPicture = "img/l.png"
    obj.bmiBrief = "Everyone loves the curvy style, lets make sure its in the correct places, some finetunning to be good on the long run"
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese"
    obj.bmiPicture = "img/xl.jpg"
    obj.bmiBrief = "A bit too much of love-hangers, health first and then all to follow...but nothing impossible "
  }
}
