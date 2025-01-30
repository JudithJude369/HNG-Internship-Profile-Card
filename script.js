// Function to update the current day of the week and UTC time in milliseconds
function updateDateTime() {
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const date = new Date();
  const utcStr = date.toUTCString();

  currentUTCTime.textContent = utcStr;
}

// Call updateDateTime initially to set the initial values
updateDateTime();

// Set up a timer to update the values every second (or adjust the interval as needed)
setInterval(updateDateTime, 1000); // 1000 milliseconds = 1 second

// Function to handle errors
function handleErrors() {
  const profileImage = document.querySelector('[data-testid="profilePicture"]');
  profileImage.onerror = () => {
    profileImage.src = "images/judith-jude.jpg"; // Display default image
    profileImage.alt = "Default Profile";
  };

  const linkedinURL = document.querySelector('[ data-testid="socialLink"]');
  linkedinURL.onerror = () => {
    linkedinURL.textContent = "LINKEDIN URL Not Found"; // Provide error message
    linkedinURL.href = "#"; // Remove the link
  };
}

// Call the update an
handleErrors();
