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

function switchStep(currentId, nextId) {
  pauseAllVideos();
  document.getElementById(currentId).style.opacity = '0';
  setTimeout(() => {
    document.getElementById(currentId).classList.remove('active');
    document.getElementById(nextId).classList.add('active');
    document.getElementById(nextId).style.opacity = '1';
    window.scrollTo(0, 0);
  }, 300); // Match this duration with your CSS transition
}
