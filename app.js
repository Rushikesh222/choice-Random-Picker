const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    RandomSelect();
  }
});
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}
function RandomSelect() {
  const time = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlighttag(randomTag);
    setTimeout(() => {
      unhighlighttag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlighttag(randomTag);
    }, 100);
  }, time * 100);
}
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
function highlighttag(tag) {
  tag.classList.add("highlight");
}
function unhighlighttag(tag) {
  tag.classList.remove("highlight");
}
