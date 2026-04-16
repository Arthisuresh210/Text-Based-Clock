const clock = document.createElement("div");
const date = document.createElement("div");

clock.style.fontSize = "clamp(50px, 10vw, 120px)";
clock.style.fontWeight = "bold";
clock.style.letterSpacing = "6px";
clock.style.color = "#00ffff"; 
clock.style.textShadow = `
  0 0 10px #00ffff,
  0 0 20px #00ffff,
  0 0 40px #ff00ff
`;
clock.style.transition = "transform 0.2s ease";
clock.style.zIndex = "1";

date.style.fontSize = "22px";
date.style.marginTop = "15px";
date.style.color = "#ffffffcc";
date.style.zIndex = "1";

document.body.appendChild(clock);
document.body.appendChild(date);

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  clock.style.transform = "scale(1.08)";
  setTimeout(() => clock.style.transform = "scale(1)", 120);

  clock.textContent = `${h}:${m}:${s} ${ampm}`;

  date.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

updateClock();
setInterval(updateClock, 1000);
