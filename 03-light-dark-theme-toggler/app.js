const body = document.querySelector("body");
const btn = document.querySelector("button");

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
const systemDefaultTheme = isDark ? "dark" : "light";

const userDefaultTheme = localStorage.getItem("theme");



body.classList.add(userDefaultTheme || systemDefaultTheme);

btn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});

window
  .matchMedia("(prefers-color-scheme:dark)")
  .addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light";


    body.classList.replace(
      body.classList.contains("dark") ? "dark" : "light",
      newTheme
    );

   if(newTheme === "dark"){
    localStorage.setItem("theme", "dark");
   }else{
    localStorage.setItem("theme", "light");
   }
  });
