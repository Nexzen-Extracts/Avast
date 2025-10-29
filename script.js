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

// Setup for footer dropdown
setupCountryDropdown("footer-country-list", "footer-selected-country");
