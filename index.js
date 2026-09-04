// Audio sample mappings
const soundMap = {
  w: 'sounds/tom-1.mp3',
  a: 'sounds/crash.mp3',
  s: 'sounds/kick-bass.mp3',
  d: 'sounds/snare.mp3',
  j: 'sounds/tom-2.mp3',
  k: 'sounds/tom-3.mp3',
  l: 'sounds/tom-4.mp3'
};

// Preload audio objects for instant latency-free playback
const audioPool = {};
let masterVolume = 0.8;

for (const key in soundMap) {
  const audio = new Audio(soundMap[key]);
  audio.preload = 'auto';
  audioPool[key] = audio;
}

// Volume slider handling
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

if (volumeSlider && volumeValue) {
  volumeSlider.addEventListener('input', function (e) {
    masterVolume = parseFloat(e.target.value);
    volumeValue.textContent = Math.round(masterVolume * 100) + '%';
  });
}

// Visualizer element
const visualizer = document.getElementById('visualizer');
let visualizerTimeout = null;

function triggerVisualizer() {
  if (!visualizer) return;
  visualizer.classList.add('active');
  clearTimeout(visualizerTimeout);
  visualizerTimeout = setTimeout(function () {
    visualizer.classList.remove('active');
  }, 160);
}

// Play sound with instant overlap support
function playSound(key) {
  const lowerKey = key.toLowerCase();
  if (soundMap[lowerKey]) {
    // Clone node allows simultaneous overlapping playback for rapid drumming
    const soundInstance = audioPool[lowerKey].cloneNode();
    soundInstance.volume = masterVolume;
    soundInstance.play().catch(function (error) {
      // Handle any autoplay restrictions if triggered before initial user interaction
      console.warn('Playback error:', error);
    });
    triggerVisualizer();
  }
}

// Visual button animation
function buttonAnimation(currentKey) {
  const lowerKey = currentKey.toLowerCase();
  const activeButton = document.querySelector('.' + lowerKey);

  if (activeButton) {
    activeButton.classList.add('pressed');
    setTimeout(function () {
      activeButton.classList.remove('pressed');
    }, 120);
  }
}

// Play note trigger combining sound + visual animation
function playDrum(key) {
  const lowerKey = key.toLowerCase();
  if (soundMap[lowerKey]) {
    playSound(lowerKey);
    buttonAnimation(lowerKey);
  }
}

// Click and Touch event listeners for drum buttons
document.querySelectorAll('.drum').forEach(function (button) {
  // Support click
  button.addEventListener('click', function () {
    const key = this.getAttribute('data-key') || this.classList[0];
    playDrum(key);
  });

  // Support mobile touchstart with responsive instant trigger
  button.addEventListener('touchstart', function (e) {
    e.preventDefault();
    const key = this.getAttribute('data-key') || this.classList[0];
    playDrum(key);
  }, { passive: false });
});

// Keyboard event listener (supports uppercase/lowercase & CapsLock)
document.addEventListener('keydown', function (event) {
  // Ignore repeat events when holding down keys to avoid stutter
  if (event.repeat) return;
  playDrum(event.key);
});
