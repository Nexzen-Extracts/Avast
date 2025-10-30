// Function to handle country dropdown selection
function setupCountryDropdown(dropdownId, selectedId) {
  const countryList = document.getElementById(dropdownId);
  const selectedCountry = document.getElementById(selectedId);

  countryList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const flagSrc = li.getAttribute("data-flag-src");
    const name = li.getAttribute("data-name");
    const lang = li.getAttribute("data-lang");

    // Update selected country display
    selectedCountry.innerHTML = `<img src="${flagSrc}" class="flag-small" alt="${name}"> ${name} - ${lang} ▾`;
  });
}

// Setup for header dropdown
setupCountryDropdown("country-list", "selected-country");


setupCountryDropdown("footer-country-list", "footer-selected-country");
// home.html header
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-section");
  const right = document.querySelector(".right-section");

  if (hamburger) {
    hamburger.addEventListener("click", (e) => {
      e.preventDefault(); 
      nav.classList.toggle("active");
      right.classList.toggle("active");
      hamburger.classList.toggle("open"); 
    });
  }
});
