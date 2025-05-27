//your JS code here. If required.
// Helper: Set cookie
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString(); // 864e5 = 86400000ms = 1 day
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Helper: Get cookie
function getCookie(name) {
  const value = document.cookie.match(`(?:^|;)\\s*${name}=([^;]*)`);
  return value ? decodeURIComponent(value[1]) : null;
}

// Apply saved preferences to page
function applyPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Handle form submit
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Save to cookies
  setCookie('fontsize', fontSize);
  setCookie('fontcolor', fontColor);

  // Apply changes immediately
  document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});

// Apply preferences on page load
applyPreferences();
