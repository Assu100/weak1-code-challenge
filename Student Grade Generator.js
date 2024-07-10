//A function that calculates student grades
function calculateGrade(marks) {
    let grade;

    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
  }
//A function that prompts a user to enter the students marks then returns the student grade 
function studentGradeGenerator() {
    const mark = parseFloat(prompt('Enter the student mark (0-100):'));
  
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'Invalid input. Please enter a valid mark between 0 and 100.';
    }
  
    const grade = calculateGrade(mark);
    return `The student's grade is: ${grade}`;
}
  
const result = studentGradeGenerator();
console.log(result);