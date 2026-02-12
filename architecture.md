## Layers

The app has **3 layers**:

1. **Data Layer**
	Stores the quiz questions and answers.
2. **Logic Layer**
	Handles:
		- Asking questions
		- Checking answers
		- Updating score
3. **Output Layer**
	Displays:
		- Each question
		- Correct/incorrect messages
		- Final score
## Purpose
- Ask questions → check answers → show score
-  Practice loops, conditionals, arrays, and functions
- Build a small, self‑contained logic system
## Flow / Logic Breakdown
1. Load the questions (array of objects)
2. Set score = 0
3. Loop through each question
	- Show the question
	- Get the user's answer
	- Compare answer with correct one
	- If correct -> increase score
4. After the loop ends
	- Show final score
	- Show percentage
	- Show pass/fail (optional)

## Functions
#### 1. askQuestions(questionObj)
- Displays the question
- Gets user input
- Returns the user's answer
#### 2. checkAnswer(userAnswer, correctAnswer)
- Compares values
- Returns `true`/`false`
#### 3. runQuiz()
- Loops through all questions
- Tracks score
- Calls `showFinalScore()` at the end
#### 4. runQuiz()
- Prints score
- Prints percentage
- Optional: pass/fail message

## Data Structures

#### Array of question objects:

- Arrays let you loop though questions
- Objects let you store questions + answers together
- It scales easily (add more questions anytime)

```js
const questions = [
  {
    question: 'What is 2 + 2?',
    answer: '4'
  },
  {
    question: 'What is the capital of France?',
    answer: 'Paris'
  }
]
```

## Pseudocode

```
SET score = 0
FOR each question in questions:
    DISPLAY question
    GET user answer
    IF user answer == correct answer:
        INCREMENT score
DISPLAY final score
DISPLAY percentage
```

## Notes
- Any decisions you made
- Things you want to improve later