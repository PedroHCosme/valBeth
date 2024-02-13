let noClickCount = 0; // Variable to track the number of times "No" button is clicked

document.getElementById('yes').addEventListener('click', function() {
    document.querySelector('.question').innerText = "Uhuuuul!!!!!!";
    window.location.href = "yespage.html"; 
});

document.getElementById('no').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount > 4) {
        window.location.href = "nopage.html"; 
    } else {
        const yesButton = document.getElementById('yes');
        const currentScale = yesButton.style.transform ? parseFloat(yesButton.style.transform.match(/[\d.]+/)[0]) : 1.0; // Get the current scale or set it to 1.0 if not defined
        const newScale = currentScale * 1.12; // Increasing size by 10%
        yesButton.style.transform = `scale(${newScale})`;
    }
});

