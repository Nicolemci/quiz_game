document.addEventListener('DOMContentLoaded', function() {
  let turns = 5;
  let sorted = false;

  // Fetch countries data from the view
  let countries = Array.from(document.querySelectorAll('.country'));
  let countryList = countries.map(country => ({
    name: country.dataset.name,
    population: parseInt(country.dataset.population, 10)
  }));

  // Shuffle the countries initially
  countryList.sort(() => Math.random() - 0.5);

  // Render the countries
  renderCountries(countryList);

  document.getElementById('submit-sort').addEventListener('click', () => {
    if (turns > 0) {
      turns--;
      if (checkOrder(countryList)) {
        sorted = true;
        alert('Correct order!');
      } else {
        alert('Incorrect order. Try again.');
      }
    } else {
      alert('Game over. You are out of turns.');
    }
  });

  function renderCountries(countries) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    countries.forEach(country => {
      const countryElement = document.createElement('div');
      countryElement.className = 'country';
      countryElement.dataset.name = country.name;
      countryElement.dataset.population = country.population;
      countryElement.textContent = country.name;
      container.appendChild(countryElement);
    });
  }

  function checkOrder(countries) {
    for (let i = 1; i < countries.length; i++) {
      if (countries[i-1].population > countries[i].population) {
        return false;
      }
    }
    return true;
  }
});
