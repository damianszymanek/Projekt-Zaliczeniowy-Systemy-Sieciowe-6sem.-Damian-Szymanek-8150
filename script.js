document.getElementById('kalkulator-forma').addEventListener('submit', function (event) {
	event.preventDefault() // nie pozwala na  odświeżenie strony.

	const weight = document.getElementById('weight').value
	const height = document.getElementById('height').value / 100 //zamienia
	const bmi = (weight / (height * height)).toFixed(2)
	const result = document.getElementById('result')
	let classification = ''

	if (bmi < 18.5) {
		classification = 'Niedowage'
	} else if (bmi >= 18.5 && bmi < 24.9) {
		classification = 'Waga prawidłowa'
	} else if (bmi >= 25 && bmi < 29.9) {
		classification = 'Nadwaga'
	} else {
		classification = 'Otyłość'
	}

	result.innerHTML = `Twoje BMI wynosi: ${bmi} ${classification}`
})
