//your code here
let cleanedBandNames = bandNames.map(name => name.replace(/^(a |an |the )/i, ''));

// Sort the cleaned band names in lexicographic order
cleanedBandNames.sort();

// Get the 'band' ul element
let bandList = document.getElementById('band');

// Clear the existing contents of the 'band' ul element
bandList.innerHTML = '';

// Create and append li elements for each band name
cleanedBandNames.forEach(name => {
  let li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});







