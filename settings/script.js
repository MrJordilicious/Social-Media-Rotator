/* 
AUTHOR: MRJORDILICIOUS
URL:    HTTPS://MRJORDILICIOUS.COM
TWITCH: HTTPS://TWITCH.TV/MRJORDILICIOUS
KOFI:   HTTPS://KO-FI.COM/MRJORDILICIOUS
LINKS:  HTTPS://LINKS.MRJORDILICIOUS.COM  
*/

const BASE_URL = "https://widgets.mrjordilicious.com/Social-Media-Rotator/"; // Replace with your actual widget base URL

const param1El = document.getElementById("param1");
const param2El = document.getElementById("param2");
const param3El = document.getElementById("param3");
const param4El = document.getElementById("param4");
const param5El = document.getElementById("param5");
const param6El = document.getElementById("param6");
const param7El = document.getElementById("param7");
const param8El = document.getElementById("param8");
const param9El = document.getElementById("param9");
const param10El = document.getElementById("param10");
const param11El = document.getElementById("param11");
const param12El = document.getElementById("param12");
const locationToggleEl = document.getElementById("location-toggle");
const resultEl = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const copyMsg = document.getElementById("copyMsg");
const iframeEl = document.getElementById("widgetPreview");

function updateURL() {
  // Clear form values on page load
window.addEventListener("load", () => {
  param1El.value = "";
  param2El.value = "";
  updateURL(); // trigger update for iframe + URL
});
  
    const params = [];

  if (param1El.value.trim()) {
    params.push("twitch=" + encodeURIComponent(param1El.value.trim()));
  }
  if (param2El.value.trim()) {
    params.push("youtube=" + encodeURIComponent(param2El.value.trim()));
  }
  if (param3El.value.trim()) {
    params.push("bsky=" + encodeURIComponent(param3El.value.trim()));
  }
  if (param4El.value.trim()) {
    params.push("twitter=" + encodeURIComponent(param4El.value.trim()));
  }
  if (param5El.value.trim()) {
    params.push("discord=" + encodeURIComponent(param5El.value.trim()));
  }
  if (param6El.value.trim()) {
    params.push("tiktok=" + encodeURIComponent(param6El.value.trim()));
  }
  if (param12El.value.trim()) {
    params.push("instagram=" + encodeURIComponent(param12El.value.trim()));
  }
  if (param7El.value.trim()) {
    params.push("steam=" + encodeURIComponent(param7El.value.trim()));
  }
  if (param8El.value.trim()) {
    params.push("xbox=" + encodeURIComponent(param8El.value.trim()));
  }
  if (param9El.value.trim()) {
    params.push("playstation=" + encodeURIComponent(param9El.value.trim()));
  }
  if (param10El.value.trim()) {
    params.push("battlenet=" + encodeURIComponent(param10El.value.trim()));
  }
  if (param11El.value.trim()) {
    params.push("website=" + encodeURIComponent(param11El.value.trim()));
  }
  if (locationToggleEl && locationToggleEl.checked) {
    params.push("location=left");
  }

  const fullURL = BASE_URL + (params.length ? "?" + params.join("&") : "");

  resultEl.textContent = fullURL;
  iframeEl.src = fullURL;
}

// Update on load and whenever any input changes
[param1El, param2El, param3El, param4El, param5El, param6El, param12El, param7El, param8El, param9El, param10El, param11El, locationToggleEl].forEach(el => {
  el.addEventListener("input", updateURL);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.textContent).then(() => {
    copyMsg.style.display = "inline";
    setTimeout(() => copyMsg.style.display = "none", 1500);
  });
});

// Initial run
updateURL();
