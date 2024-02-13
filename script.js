document.getElementById('yesBtn').addEventListener('click', function() {
    document.querySelector('.question').innerText = "Uhuuuul! Um e-mail foi encaminhado com a sua resposta.";
    sendEmail("Yes");
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    document.querySelector('.question').innerText = "Certo, um e-mail foi encaminhado com a sua resposta.";
    sendEmail("No");
  });
  
  function sendEmail(answer) {
    // Replace 'your-email@example.com' with your email address
    const emailAddress = 'pcosme555@gmail.com';
    const subject = 'Valentine\'s Day Response';
    const body = 'The user answered: ' + answer;
  
    const mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    // Create a temporary <a> element to trigger the email client
    const emailLink = document.createElement('a');
    emailLink.href = mailtoLink;
    emailLink.click();
  }
  