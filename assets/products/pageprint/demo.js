"use strict";

(() => {
  const demo = document.querySelector("[data-pageprint-demo]");
  if (!demo) return;

  const trigger = demo.querySelector("[data-demo-capture]");
  const liveStatus = document.querySelector("[data-demo-live-status]");
  const liveCopy = liveStatus?.querySelector("[data-demo-live-copy]");
  if (!trigger || !liveStatus || !liveCopy) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timers = [];
  let recoveryTimer = null;
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

  function setStep(label) {
    liveCopy.textContent = label;
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
    const rootStyle = document.documentElement.style;
    const previousValue = rootStyle.getPropertyValue("scroll-behavior");
    const previousPriority = rootStyle.getPropertyPriority("scroll-behavior");
    rootStyle.setProperty("scroll-behavior", "auto", "important");
    window.scrollTo({ top: startY, left: startX, behavior: "instant" });
    if (previousValue) {
      rootStyle.setProperty("scroll-behavior", previousValue, previousPriority);
    } else {
      rootStyle.removeProperty("scroll-behavior");
    }
  }

  function finish() {
    window.clearTimeout(recoveryTimer);
    recoveryTimer = null;
    const filename = buildFilename();
    const download = document.createElement("a");
    download.href = trigger.href;
    download.download = filename;
    demo.classList.remove("is-capturing");
    trigger.removeAttribute("aria-disabled");
    trigger.setAttribute("aria-label", "Capture this page again");
    trigger.title = "Capture this page again";
    liveStatus.classList.add("is-saved");
    liveCopy.textContent = "Pageprint saved.";
    running = false;
    download.click();
    trigger.focus({ preventScroll: true });
    restorePage();
    later(2600, () => {
      liveStatus.hidden = true;
      liveStatus.classList.remove("is-saved");
    });
  }

  function run() {
    if (running) return;
    running = true;
    timers.forEach(window.clearTimeout);
    timers = [];
    window.clearTimeout(recoveryTimer);
    demo.classList.add("is-capturing");
    startX = window.scrollX;
    startY = window.scrollY;
    trigger.setAttribute("aria-disabled", "true");
    trigger.setAttribute("aria-label", "Pageprint sample is capturing");
    liveStatus.classList.remove("is-saved");
    liveStatus.hidden = false;
    recoveryTimer = window.setTimeout(() => {
      timers.forEach(window.clearTimeout);
      timers = [];
      restorePage();
      liveStatus.hidden = true;
      liveStatus.classList.remove("is-saved");
      trigger.removeAttribute("aria-disabled");
      trigger.setAttribute("aria-label", "Capture this page");
      running = false;
    }, 12_000);
    setStep("Preparing full page\u2026");
    later(520, () => {
      setStep("Capturing full page\u2026");
      scrollPage(0.34);
    });
    later(1320, () => {
      setStep("Capturing full page\u2026");
      scrollPage(0.68);
    });
    later(2120, () => {
      setStep("Capturing full page\u2026");
      scrollPage(1);
    });
    later(2920, () => {
      setStep("Processing full page\u2026");
      restorePage();
    });
    later(3800, finish);
  }

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    run();
  });
})();
