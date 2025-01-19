//your JS code here. If required.
const sizeInfo = document.getElementById('sizeInfo');
    const sizeDisplay = sizeInfo.querySelector('h1');

    function updateWindowSize() {
      sizeDisplay.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
    }

    // Initial display
    updateWindowSize();

    // Event listener for window resize
    window.addEventListener('resize', updateWindowSize);