function updateContent() {
	
	let matchPatterns = {

	prompt: /^\d{1,3}(?:\)|\.).+$/m,
	answers: /a(?:\)[\s\S]+?(?=Answer: ))/gi,
	answer: /(\w)(?:\)|\.) (.*)/im,
	correctAnswer: /^Answer: +\S/m,
	splitPool: /(?=^(?:\d{1,3}(?:\)|\.) |Type: \S{1,3}))/im,
	// splitQuestion: /(?=^(?:\d{1,3}|\*{0,1}[a-z])(?:\)|\.) |(?:Answer ))/im,
	};

	input = document.querySelector('textarea#input')
	output = document.querySelector('textarea#output')
	questions = input.value.split(matchPatterns.splitPool)
	updatedQuestions = ``

	for(let question of questions) {

	  let  prompt = question.match(matchPatterns.prompt)[0]
	  let  answers = question.match(matchPatterns.answers)[0]
	  let  correctAnswer = question.match(matchPatterns.correctAnswer)[0].replace(/Answer: +/i, '')
	  
	  answers = answers.replace(`${correctAnswer}`, `*${correctAnswer}`)

	  // console.log(prompt)
	  // console.log(answers)
	  // console.log(correctAnswer)
	  // console.log('\n')

	  let updatedQuestion = `${prompt}\n${answers}\n`
	  console.log(updatedQuestion)
	  
	  updatedQuestions +=updatedQuestion
	}

	output.value = updatedQuestions
}

function addListener() {
	document.querySelector('#input').addEventListener( 'change', updateContent() )
}

document.addEventListener( 'load', addListener() )
