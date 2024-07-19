document.addEventListener('DOMContentLoaded', () => {
  const countries = document.querySelectorAll('.country');
  let guesses = [];
  let correctOrder = Array.from(countries)
    .sort((a, b) => b.dataset.population - a.dataset.population)
    .map(country => country.dataset.name);

  countries.forEach(country => {
    country.addEventListener('click', () => {
      const countryName = country.dataset.name;

      if (guesses.includes(countryName)) {
        return; // Ignore already guessed countries
      }

      guesses.push(countryName);

      const expectedCountry = correctOrder[guesses.length - 1];

      if (countryName === expectedCountry) {
        country.classList.add('correct');
        country.querySelector('.result').textContent = '✔️';
      } else {
        country.classList.add('incorrect');
        country.querySelector('.result').textContent = '❌';
      }

      if (guesses.length >= 5) {
        setTimeout(() => {
          alert('Game over! The correct order was:\n' + correctOrder.join(', '));
          location.reload(); // Reload the page to restart the game
        }, 1000);
      }
    });
  });
});
