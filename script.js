const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".timeline-panel");
const copyButton = document.querySelector("#copyTemplate");
const template = document.querySelector("#mvocTemplate");
const checks = document.querySelectorAll(".checklist input");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.target}`).classList.add("active");
  });
});

checks.forEach((checkbox, index) => {
  const storageKey = `gsk-msl-check-${index}`;
  checkbox.checked = localStorage.getItem(storageKey) === "true";

  checkbox.addEventListener("change", () => {
    localStorage.setItem(storageKey, checkbox.checked);
  });
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(template.textContent);
    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1600);
  } catch {
    copyButton.textContent = "Select";
  }
});
