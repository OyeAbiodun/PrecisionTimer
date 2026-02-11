let timerInterval = null;
let totalSeconds = 0;
let overtime = false;
let running = false;
let editingIndex = null;

const display = document.getElementById("display");
const sidebar = document.getElementById("sidebar");
const presetList = document.getElementById("presetList");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const editHours = document.getElementById("editHours");
const editMinutes = document.getElementById("editMinutes");
const editSeconds = document.getElementById("editSeconds");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const controls = document.getElementById("controls");

let presets = JSON.parse(localStorage.getItem("timerPresets")) || [
  { label: "5 min", seconds: 300 },
  { label: "10 min", seconds: 600 },
  { label: "15 min", seconds: 900 },
  { label: "30 min", seconds: 1800 },
  { label: "1 hr", seconds: 3600 }
];

function savePresets() {
  localStorage.setItem("timerPresets", JSON.stringify(presets));
}

function formatTime(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, "0");
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function updateDisplay() {
  display.textContent = formatTime(totalSeconds);
}

function toggleSidebar() {
  sidebar.classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function renderPresets() {
  presetList.innerHTML = "";
  presets.forEach((preset, index) => {
    const item = document.createElement("div");
    item.className = "preset-item ripple-btn";
    item.innerHTML = `
      <span class="preset-label">${preset.label}</span>
      <div class="preset-actions">
        <button onclick="editPreset(${index})" aria-label="Edit preset">✏️</button>
        <button onclick="deletePreset(${index})" aria-label="Delete preset">🗑️</button>
      </div>
    `;
    item.onclick = (e) => {
      if (e.target.tagName === "BUTTON") return;
      if (running) return;
      totalSeconds = preset.seconds;
      overtime = false;
      document.body.classList.remove("overtime");
      updateDisplay();
      toggleSidebar();
    };
    presetList.appendChild(item);
  });
}

function openEditor(index = null) {
  editingIndex = index;
  modalTitle.textContent = index === null ? "Set Timer" : "Edit Timer";

  let sec;
  if (index === null) {
    sec = totalSeconds;
  } else {
    sec = presets[index].seconds;
  }

  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  editHours.value = h;
  editMinutes.value = m;
  editSeconds.value = s;

  modalOverlay.classList.add("active");
}

function closeEditor() {
  modalOverlay.classList.remove("active");
}

function savePreset() {
  const h = parseInt(editHours.value) || 0;
  const m = parseInt(editMinutes.value) || 0;
  const s = parseInt(editSeconds.value) || 0;
  const seconds = h * 3600 + m * 60 + s;
  if (seconds <= 0) return;

  const label =
    h > 0 ? `${h} hr${h > 1 ? "s" : ""}` :
    m > 0 ? `${m} min` :
    `${s} sec`;

  if (editingIndex === null) {
    presets.push({ label, seconds });
  } else {
    presets[editingIndex] = { label, seconds };
  }

  savePresets();
  renderPresets();
  closeEditor();
}

function editPreset(index) {
  openEditor(index);
}

function deletePreset(index) {
  presets.splice(index, 1);
  savePresets();
  renderPresets();
}

function toggleStartStop() {
  running ? stopTimer() : startTimer();
}

function startTimer() {
  if (timerInterval || totalSeconds <= 0) return;
  running = true;
  controls.classList.add("hidden");
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";

  timerInterval = setInterval(() => {
    if (!overtime) {
      totalSeconds--;
      if (totalSeconds <= 0) {
        totalSeconds = 0;
        overtime = true;
        document.body.classList.add("overtime");
      }
    } else {
      totalSeconds++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  running = false;
  controls.classList.remove("hidden");
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
}

function resetTimer() {
  stopTimer();
  overtime = false;
  totalSeconds = 0;
  document.body.classList.remove("overtime");
  updateDisplay();
}

/* Keyboard Shortcuts */
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;

  switch (e.key.toLowerCase()) {
    case " ":
      e.preventDefault();
      toggleStartStop();
      break;
    case "r":
      resetTimer();
      break;
    case "m":
      toggleSidebar();
      break;
    case "e":
      openEditor();
      break;
    case "f":
      toggleFullscreen();
      break;
    case "escape":
      closeEditor();
      sidebar.classList.remove("open");
      break;
  }
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

/* Ripple Effect Handler */
document.addEventListener("click", function (e) {
  const target = e.target.closest(".ripple-btn");
  if (!target) return;

  const circle = document.createElement("span");
  const diameter = Math.max(target.clientWidth, target.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - target.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${e.clientY - target.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple");

  const ripple = target.querySelector(".ripple");
  if (ripple) ripple.remove();

  target.appendChild(circle);
});

/* Init */
renderPresets();
updateDisplay();