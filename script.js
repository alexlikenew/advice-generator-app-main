const submitBtn = document.querySelector('.advice-box__btn')
const adviceTextBox = document.querySelector('.advice-box__text')

const URL = 'https://api.adviceslip.com/daily_adviceslip.rss'

const showAdvice = () => {
	fetch('http://api.adviceslip.com/advice')
		.then(response => response.json())
		.then(res => adviceTextBox.textContent = `" ${res.slip.advice} "`)
		.catch(error => console.error(error))
}

submitBtn.addEventListener('click', showAdvice)
