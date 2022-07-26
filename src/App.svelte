<script lang='ts'>

let ans = 1

let dialog = [
	{
		question: {
			ques: "How are you?"
		},

		answers: {
			bad: 'not pog',
			good: 'pog'
		}
	}
]

console.log(dialog)

function getAnswer() {
	let badAnswer = document.getElementById('input-answer-bad')
	let goodAnswer = document.getElementById('input-answer-good')
	console.log(badAnswer)
	console.log(goodAnswer)
}

</script>

<div>
	<p>
		{dialog[0].question.ques}
	</p>
</div>

<div>
	<form>
		<label>
			<input 
				type='radio'
				value={dialog[0].answers.good}
				bind:group={ans}
				id='input-answer-bad'
			/>
			<p class="good-answer">
				{dialog[0].answers.good}
			</p>
		</label>
		<label>
			<input 
				type='radio'
				value={dialog[0].answers.bad}
				bind:group={ans}
				id='input-answer-good'
			/>
			<p class="bad-answer">
				{dialog[0].answers.bad}
			</p>
		</label>
	</form>
	<button 
			on:click|once={getAnswer}
		>
			Continue
		</button>
</div>

<style lang='scss'>

	.bad-answer, .good-answer {
		display: inline-block;
	}
	
</style>