// Define a new method called `isValidDate` for Date objects
Date.prototype.isValidDate = function() {
    var currentYear = new Date().getFullYear();
    return this.getFullYear() >= 1930 && this.getFullYear() <= currentYear;
};

class AgeCalculator {
    static calculateAge(birthDate) {
        var currentDate = new Date();
        var birthDateError = document.querySelector('#birthDateError');
        var ageResult = document.querySelector('#age');

        birthDateError.innerHTML = '';
        ageResult.innerHTML = '';

        if (!birthDate.isValidDate()) {
            birthDateError.innerHTML = 'The birth date is invalid!';
            return;
        }

        var age = currentDate.getFullYear() - birthDate.getFullYear();
        ageResult.innerHTML = 'Your age is ' + age;

        // Clear date input
        document.querySelector('#birthDate').value = '';
    }
}

document.getElementById('calculateButton').addEventListener('click', function() {
    var birthDate = new Date(document.querySelector('#birthDate').value);
    AgeCalculator.calculateAge(birthDate);
});
