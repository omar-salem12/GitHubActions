function greet(name) {
    return `Hello, ${name}!`;
}

// ← برة الـ function
module.exports = greet;

if (require.main === module) {
   // console.log(greet("World"));
}