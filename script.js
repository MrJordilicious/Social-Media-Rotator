/* 
AUTHOR: MRJORDILICIOUS
URL:    HTTPS://MRJORDILICIOUS.COM
TWITCH: HTTPS://TWITCH.TV/MRJORDILICIOUS
KOFI:   HTTPS://KO-FI.COM/MRJORDILICIOUS
LINKS:  HTTPS://LINKS.MRJORDILICIOUS.COM 
*/

////////////////
// PARAMETERS //
////////////////

const iconEl = document.getElementById('social-icon');
const usernameEl = document.getElementById('social-username');
const iconSpan = document.getElementById("social-icon-FA");
const container = document.getElementById("main-container");

// Get the URL parameters from the current page
const urlParams = new URLSearchParams(window.location.search);

const username = urlParams.get("username") || ""; // fallback if not provided
const whatSide = urlParams.get("location") || "right"; // fallback if not provided
const repeatTime = urlParams.get("delay") || "15"; // fallback if not provided
const platforms =   [
                        {param: "twitch", class: "fa-brands fa-twitch", color: "#9146ff"}, 
                        {param: "youtube", class: "fa-brands fa-youtube", color: "#ff0000"},
                        {param: "bsky", class: "fa-brands fa-bluesky", color: "#0099FF"},
                        {param: "twitter", class: "fa-brands fa-x-twitter", color: "#1da1f2"},
                        {param: "discord", class: "fa-brands fa-discord", color: "#5865f2"},
                        {param: "tiktok", class: "fa-brands fa-tiktok", color: "#FE2C55"},
                        {param: "instagram", class: "fa-brands fa-instagram", color: "#FF0069"},
                        {param: "steam", class: "fa-brands fa-steam", color: "#171a21"},
                        {param: "xbox", class: "fa-brands fa-xbox", color: "#0e7a0d"},
                        {param: "playstation", class: "fa-brands fa-playstation", color: "#003087"},
                        {param: "battlenet", class: "fa-brands fa-battle-net", color: "#00B4FF"},
                        {param: "website", class: "fa-solid fa-globe", color: "#666699"}
                    ]

const displayDuration = 5000; // 5 seconds per item
const repeatDelay = repeatTime * 60 * 1000; // 15 minutes between full loops

//////////
// CODE //
//////////

 if (whatSide === "right") {
  // Extract filled platforms from URL
  const filledPlatforms = platforms
    .map(p => {
      const username = urlParams.get(p.param);
      if (username) {
        return { ...p, username };
      }
      return null;
    })
    .filter(Boolean);
  
  function showPlatform({ class: iconClass, username, color }) {
    iconSpan.className = `${iconClass}`;
    usernameEl.textContent = username;

    // Update background color (with slight transparency)
    container.style.backgroundColor = `${color}CC`; // CC = 80% opacity

    // Slide in
    container.style.right = '0px';
    container.style.paddingLeft = '26px';

    // Slide out after 5 seconds
    setTimeout(() => {
      container.style.right = '-1080px';
      container.style.paddingLeft = '26px';
    }, displayDuration);
  }

  function cyclePlatforms(index = 0) {
    if (filledPlatforms.length === 0) return;

    showPlatform(filledPlatforms[index]);

    const nextIndex = index + 1;

    setTimeout(() => {
      if (nextIndex < filledPlatforms.length) {
        cyclePlatforms(nextIndex);
      } else {
        // All done — wait 15 minutes, then restart
        setTimeout(() => cyclePlatforms(0), repeatDelay);
      }
    }, displayDuration + 1000); // 1s buffer for smooth exit
  }

  // Kick it off
  cyclePlatforms();
 } else if (whatSide === "left") { 
  // Extract filled platforms from URL
  const filledPlatforms = platforms
    .map(p => {
      const username = urlParams.get(p.param);
      if (username) {
        return { ...p, username };
      }
      return null;
    })
    .filter(Boolean);
  
  function showPlatform({ class: iconClass, username, color }) {
    iconSpan.className = `${iconClass}`;
    usernameEl.textContent = username;

    // Change rounded corners to right side
    container.style.borderRadius = '0px 10px 10px 0px';

    // Update background color (with slight transparency)
    container.style.backgroundColor = `${color}CC`; // CC = 80% opacity

    // Slide in
    container.style.right = '';
    container.style.paddingRight = '26px';
    container.style.paddingLeft = '60px';
    container.style.left = '-5px';
    container.style.transition = 'left 0.5s ease';

    // Slide out after 5 seconds
    setTimeout(() => {
      container.style.right = '';
      container.style.paddingRight = '26px';
      container.style.paddingLeft = '60px';
      container.style.left = '-1080px';
    }, displayDuration);
  }

  function cyclePlatforms(index = 0) {
    if (filledPlatforms.length === 0) return;

    showPlatform(filledPlatforms[index]);

    const nextIndex = index + 1;

    setTimeout(() => {
      if (nextIndex < filledPlatforms.length) {
        cyclePlatforms(nextIndex);
      } else {
        // All done — wait 15 minutes, then restart
        setTimeout(() => cyclePlatforms(0), repeatDelay);
      }
    }, displayDuration + 1000); // 1s buffer for smooth exit
  }

  // Kick it off
  cyclePlatforms();
 }
 
    

  


