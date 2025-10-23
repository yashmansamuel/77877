window.addEventListener("load", () => {
  const iframe = document.getElementById("myFrame");
  const loader = document.getElementById("loader");

  // ✅ Firefox-friendly local file path
  const filePath = "file:///C:/Users/Ideal%20Garden/Downloads/neo_local_ai_demo_page%20(12).html";
  iframe.src = filePath;

  iframe.onload = () => {
    loader.style.display = "none";
    iframe.classList.add("visible");
  };

  // Agar load me delay ho to loader visible rahe
  setTimeout(() => {
    if (!iframe.classList.contains("visible")) {
      loader.style.display = "block";
    }
  }, 500);
});
