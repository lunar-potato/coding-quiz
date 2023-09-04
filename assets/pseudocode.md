# Pseudocode for the Coding Quiz
This is the pseudocode that I have came up with to start creating
my script for the Coding Quiz.

## Questions.js pseudocode
1. Get elements for question area (questions + choices)

2. Object + Array for all questions and choices + right answer
- Properties for question object include
-> Question
-> Array of answer choices
-> Index for the correct answer in the choices array

3. Function for shuffling questions
4. Copy of questions array
5. Shuffling syntax to reorder the copy (for loop)

6. Shuffle questions array 
7. Shuffle choices array

8. Export/Run function of question objects

## Logic.js pseudocode
1. Import questions array from the questions.js

2. Define variables for current question index, user score, timer value, timer interval ID

3. Function to start the quiz
4. Load in variables
5. Timer 

6. Function for rendering questions
7. Displaying the current question and choices
8. Event listeners for answer choice buttons

9. Function to user answer selection
10. Checking if selection is correct
11. Updating score and moving to next question
12. Subtracting time if the answer is incorrect

13. Function for timer (incorrect)
14. Decrementing timer value
15. Check if timer is zero, end quiz = true

16. Function for end quiz
17. Stop timer
18. Displaying user score
19. User score saving (initials and score)

20. Event listener to start button to start quiz

## Scores.js pseudocode
1. Variable for storing scores and initials

2. Define function to save initials and score
3. Prompt user to add their initials
4. Store intials and score to an array

5. Define function to display the leaderboard
6. Retrieve the scores and initials
7. Sort order by highest to lowest

## References 
References and sources for questions are from:
https://www.proprofs.com/quiz-school/story.php?title=3dq-how-well-do-you-know-front-end-developer-test
https://www.proprofs.com/quiz-school/story.php?title=introduction-to-web-development-quiz
https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML

