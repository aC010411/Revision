function scrollTabs(direction) {
  const tabHeader = document.getElementById("tabHeader");
  tabHeader.scrollBy({
    left: direction * 200, // Scrolls 200px left/right
    behavior: "smooth",
  });
}
