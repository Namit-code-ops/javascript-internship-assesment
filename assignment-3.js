
const scoreInput = prompt("Enter your score (0-100):");
const score = Number(scoreInput);

if (
    scoreInput === null ||
    scoreInput.trim() === "" ||
    !Number.isFinite(score) ||
    score < 0 ||
    score > 100
) {
    console.log("Invalid score. Enter a number from 0 to 100.");
} else {
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    let letterGrade;

    switch (grade) {
        case "A":
            letterGrade = "Excellent";
            break;
        case "B":
            letterGrade = "Very Good";
            break;
        case "C":
            letterGrade = "Good";
            break;
        case "D":
            letterGrade = "Needs Improvement";
            break;
        default:
            letterGrade = "Fail";
    }

    const result = score >= 60 ? "Pass" : "Fail";

    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Description: ${letterGrade}`);
    console.log(`Result: ${result}`);
}
