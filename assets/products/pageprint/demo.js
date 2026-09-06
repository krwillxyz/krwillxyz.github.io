"use strict";

(() => {
  const demo = document.querySelector("[data-pageprint-demo]");
  if (!demo) return;

  const trigger = demo.querySelector("[data-demo-capture]");
  const state = demo.querySelector("[data-demo-state]");
  const copy = demo.querySelector("[data-demo-copy]");
  const liveStatus = document.querySelector("[data-demo-live-status]");
  const liveCopy = liveStatus.querySelector("[data-demo-live-copy]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timers = [];
  let running = false;
  let startX = 0;
  let startY = 0;

  function later(delay, callback) {
    const wait = reducedMotion ? Math.max(40, Math.round(delay * 0.12)) : delay;
    const timer = window.setTimeout(callback, wait);
    timers.push(timer);
  }

  function sanitizePart(value, fallback, maxLength) {
    const normalized = String(value || "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9._ -]+/g, " ")
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/\.{2,}/g, ".")
      .replace(/^[-.]+|[-.]+$/g, "")
      .toLowerCase();
    return (normalized || fallback).slice(0, maxLength).replace(/[-.]+$/g, "") || fallback;
  }

  function buildFilename(date = new Date()) {
    const localDate = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");
    const localMinute = [
      String(date.getHours()).padStart(2, "0"),
      String(date.getMinutes()).padStart(2, "0"),
    ].join("-");
    const host = sanitizePart(window.location.hostname.replace(/^www\./, ""), "page", 70);
    const title = sanitizePart(document.title, "capture", 110);
    return `${host}-${title}-${localDate}-${localMinute}.png`;
  }

  function setStep(label, message) {
    state.textContent = label;
    copy.textContent = message;
    liveCopy.textContent = `Pageprint - ${label}`;
  }

  function scrollPage(progress) {
    const distance = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: distance * progress,
      left: startX,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  function restorePage() {
    window.scrollTo({
      top: startY,
      left: startX,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  function finish() {
    const filename = buildFilename();
    const download = document.createElement("a");
    download.href = trigger.href;
    download.download = filename;
    demo.classList.remove("is-capturing");
    demo.classList.add("is-complete");
    trigger.removeAttribute("aria-disabled");
    trigger.setAttribute("aria-label", "Capture this page again");
    trigger.title = "Capture this page again";
    state.textContent = "Saved";
    copy.textContent = `${filename} was sent to your browser's downloads. This page is back where it started.`;
    liveStatus.hidden = true;
    running = false;
    download.click();
    trigger.focus({ preventScroll: true });
  }

  function run() {
    if (running) return;
    running = true;
    timers.forEach(window.clearTimeout);
    timers = [];
    demo.classList.remove("is-complete");
    demo.classList.add("is-capturing");
    startX = window.scrollX;
    startY = window.scrollY;
    trigger.setAttribute("aria-disabled", "true");
    trigger.setAttribute("aria-label", "Pageprint sample is capturing");
    liveStatus.hidden = false;
    setStep("Reading page", "Measuring this document before anything moves.");
    later(520, () => {
      setStep("Frame 1 of 3", "Capturing the first visible section locally.");
      scrollPage(0.34);
    });
    later(1320, () => {
      setStep("Frame 2 of 3", "Walking through this page while repeated edges stay out of the result.");
      scrollPage(0.68);
    });
    later(2120, () => {
      setStep("Frame 3 of 3", "Reaching the end of this page.");
      scrollPage(1);
    });
    later(2920, () => {
      setStep("Joining locally", "Building one image and restoring your position.");
      restorePage();
    });
    later(3800, finish);
  }

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    run();
  });
})();
