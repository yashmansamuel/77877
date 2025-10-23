window.addEventListener("load", () => {
  const iframe = document.getElementById("myFrame");
  const loader = document.getElementById("loader");

  // 👇 Apni local file ka path yahaan likho
  // NOTE: This path MUST be correct for your computer to work.
  const filePath = "file:///C:/Users/Ideal%20Garden/Downloads/neo_local_ai_demo_page%20(12).html";
  iframe.src = filePath;

  // Jab iframe load ho jaye to loader hatayein aur iframe show karein
  iframe.onload = () => {
    loader.style.display = "none";
    iframe.classList.add("visible");
  };

  // Agar file load hone me zyada waqt lag jaye, to loader visible rahe
  setTimeout(() => {
    if (!iframe.classList.contains("visible")) {
      loader.style.display = "block";
    }
  }, 500);
});