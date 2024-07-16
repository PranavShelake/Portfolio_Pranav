const typingAnimationElement = document.getElementById('typing-animation');

// Create an array of typing text
const typingTexts = [' Web Developer', ' Machine Learning Engineer', ' Data Scientist', ' Competitive Programmer'];

// Function to display the typing animation for a given text
function playTypingAnimation(text, index = 0) {
  if (index < text.length) {
    typingAnimationElement.textContent += text[index];
    setTimeout(() => {
      playTypingAnimation(text, index + 1);
    }, 100); // Adjust delay for typing speed
  } else {
    setTimeout(() => {
      deleteTypingAnimation(text);
    }, 2000); // Delay before deleting starts
  }
}

// Function to display the deleting animation
function deleteTypingAnimation(text, index = text.length) {
  if (index > 0) {
    typingAnimationElement.textContent = text.slice(0, index - 1);
    setTimeout(() => {
      deleteTypingAnimation(text, index - 1);
    }, 100); // Adjust delay for deleting speed
  } else {
    setTimeout(() => {
      const nextIndex = (typingTexts.indexOf(text) + 1) % typingTexts.length;
      playTypingAnimation(typingTexts[nextIndex]);
    }, 500); // Delay before starting the next typing animation
  }
}

// Start the animation with the first text in the array
playTypingAnimation(typingTexts[0]);


function toggleDropdown(id, element) {
    // Prevent the event from bubbling up to the parent elements
    event.stopPropagation();

    var content = document.getElementById(id);
    var isOpen = content.style.display === "block";

    // Toggle visibility
    content.style.display = isOpen ? "none" : "block";

    // Change the icon
    var icon = element.querySelector('i');
    if (icon.classList.contains('fa-angle-down') || icon.classList.contains('fa-angle-up')) {
        icon.classList.toggle('fa-angle-up', !isOpen);
        icon.classList.toggle('fa-angle-down', isOpen);
    } else if (icon.classList.contains('fa-plus') || icon.classList.contains('fa-minus')) {
        icon.classList.toggle('fa-minus', !isOpen);
        icon.classList.toggle('fa-plus', isOpen);
    }
}

