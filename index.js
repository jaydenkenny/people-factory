const personForm = document.querySelector('#personForm')

function handleEvent(ev) {
	ev.preventDefault()
	const f = ev.target
	const details = document.querySelector('h1')
	heading.textContent = f.personName.value
	
}

personForm.addEventListener('submit', handleSubmit)
