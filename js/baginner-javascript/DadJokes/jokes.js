const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];
jokeButton.addEventListener('click', handleClick);
async function fetchJoke() {
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  loader.classList.add('hidden');
  return data;
}

function randomItemFromArray(arr, not) {
  // console.log(Math.floor(Math.random() * arr.length));
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('Ahh we used that one last time, look again');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  // console.log(joke);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  )
}
