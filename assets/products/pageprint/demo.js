"use strict";

(() => {
  const demo = document.querySelector("[data-pageprint-demo]");
  if (!demo) return;

  const trigger = demo.querySelector("[data-demo-capture]");
  const triggerLabel = trigger.querySelector("span");
  const viewport = demo.querySelector("[data-demo-viewport]");
  const documentPreview = demo.querySelector(".demo-document");
  const state = demo.querySelector("[data-demo-state]");
  const copy = demo.querySelector("[data-demo-copy]");
  const result = demo.querySelector("[data-demo-result]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timers = [];

  function later(delay, callback) {
    const timer = window.setTimeout(callback, reducedMotion ? Math.min(delay, 80) : delay);
    timers.push(timer);
  }

  function setStep(label, message, progress) {
    state.textContent = label;
    copy.textContent = message;
    const distance = Math.max(0, documentPreview.scrollHeight - viewport.clientHeight);
    viewport.scrollTo({ top: distance * progress, behavior: reducedMotion ? "auto" : "smooth" });
  }

  function finish() {
    demo.classList.remove("is-capturing");
    demo.classList.add("is-complete");
    trigger.disabled = false;
    triggerLabel.textContent = "Again";
    state.textContent = "Saved";
    copy.textContent = "One local PNG, ready to download. The miniature page is back where it started.";
    result.hidden = false;
    viewport.scrollTo({ top: 0, behavior: "auto" });
    trigger.focus({ preventScroll: true });
  }

  function run() {
    timers.forEach(window.clearTimeout);
    timers = [];
    demo.classList.remove("is-complete");
    demo.classList.add("is-capturing");
    result.hidden = true;
    trigger.disabled = true;
    triggerLabel.textContent = "Capturing";
    viewport.scrollTo({ top: 0, behavior: "auto" });
    setStep("Reading page", "Measuring the vertical document before anything moves.", 0);
    later(520, () => setStep("Frame 1 of 3", "Capturing the first visible section locally.", 0.34));
    later(1320, () => setStep("Frame 2 of 3", "Walking down while repeated page edges stay out of the result.", 0.68));
    later(2120, () => setStep("Frame 3 of 3", "Reaching the end of this miniature page.", 1));
    later(2920, () => setStep("Joining locally", "Building one image and restoring the page.", 1));
    later(3560, finish);
  }

  trigger.addEventListener("click", run);
})();
