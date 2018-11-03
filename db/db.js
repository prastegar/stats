module.exports = () => {
	let data = { template: [] }
	// Create 1000 users
	for (let i = 0; i < 1; i++) {
		data.template.push({ id: i, name: `template ${i}`,questions:[] })
	}
	for (let i = 0;i<10; i++) {
		data.template.map((temp)=> {
			temp.questions.push({id: i,answer_type: "this type", answers:[], question_content: `content of ${i}`})
		})
	}
	for (let i = 0; i<4; i++) {
		data.template.map((temp)=>{
				temp.questions.map((q)=>{
						q.answers.push({id: i, answer_content: `answer content ${i+1}`})
					}
				)
			}
		)
	}
	return data
}