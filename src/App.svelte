<script lang='ts'>

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

</script>

{#each dialog as dia} 
	{dia.question.ques}
{/each}

<style>
	
</style>