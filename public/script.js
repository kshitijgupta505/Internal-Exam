document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var age = parseInt(document.getElementById('age').value);
  var height = parseInt(document.getElementById('height').value);
  var weight = parseInt(document.getElementById('weight').value);

  var bmi = calculateBMI(height, weight);

  var result = document.getElementById('result');
  result.innerHTML = '<h2>Result for ' + name + '</h2>' +
                     '<p>Age: ' + age + ' years</p>' +
                     '<p>Height: ' + height + ' cm</p>' +
                     '<p>Weight: ' + weight + ' kg</p>' +
                     '<p>BMI: ' + bmi.toFixed(2) + '</p>' +
                     '<p class="' + getStatusClass(bmi) + '">' + getStatus(bmi) + '</p>';
});

function calculateBMI(height, weight) {
  return weight / ((height/100) * (height/100));
}

function getStatus(bmi) {
  if (bmi < 18.5) {
      return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
  } else {
      return 'Obese';
  }
}

function getStatusClass(bmi) {
  if (bmi < 18.5) {
      return 'underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
      return 'normal';
  } else if (bmi >= 25 && bmi < 30) {
      return 'overweight';
  } else {
      return 'obese';
  }
}
