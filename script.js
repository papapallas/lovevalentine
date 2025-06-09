function nextStep(stepId) {
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById(stepId).classList.add('active');
}

function endJourney() {
    document.querySelector('.container').innerHTML = `
        <h1>Love, Valentine</h1>
        <p>I guess you'll never hear it.</p>
    `;
}