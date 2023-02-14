const faBars = document.querySelector('.fa-bars');
const menuToggle = document.querySelector('.menu-toggle');
const bodyContainer = document.querySelector('.body');
const faX = document.querySelector('.fa-x');
const menuToggleAnchor = document.querySelector('.toggle-nav');

faBars.addEventListener('click', () => {
  bodyContainer.classList.toggle('overflow');
  menuToggle.classList.toggle('max');
});
faX.addEventListener('click', () => {
  bodyContainer.classList.toggle('overflow');
  menuToggle.classList.toggle('max');
});
menuToggleAnchor.addEventListener('click', () => {
  bodyContainer.classList.toggle('overflow');
  menuToggle.classList.toggle('max');
});
function elementFromHtml(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}
const featuredSpeakers = document.getElementById('ft-speakers');
const ftSpeakers = elementFromHtml(`<div class="ft-speakers">
  <div class="ft-speakers-title">
      <h2>Featured Artists</h2>
      <hr class="divider">
  </div>
</div>`);
featuredSpeakers.appendChild(ftSpeakers);
const speakersContainer = document.createElement('div');
speakersContainer.className = 'speakers-container';
ftSpeakers.appendChild(speakersContainer);

const speakerData = [{
  'image src': './images/sauti sol.png',
  'image alt': 'sauti sol',
  'p class': ['speaker-name', 'profession', 'more-info'],
  'speaker details': ['sauti sol', 'Kenyan band', 'Formed in Nairobi, Kenya, by vocalists Bien-Aimé Baraza, Willis Chimano and Savara Mudigi in 2005'],
},
{
  'image src': './images/drake.png',
  'image alt': 'drake',
  'p class': ['speaker-name', 'profession', 'more-info'],
  'speaker details': ['Drake', 'Canadian rapper', 'An influential figure in contemporary popular music, credited for further popularizing singing and R&B sensibilities in hip hop.'],
},
{
  'image src': './images/avicii.png',
  'image alt': 'Avicii',
  'p class': ['speaker-name', 'profession', 'more-info'],
  'speaker details': ['Avicii', 'Swedish DJ', 'Remixer and music producer. At the age of 16, Bergling began posting his remixes on electronic device'],
},
{
  'image src': './images/anne-marie.png',
  'image alt': 'ann-amrie',
  'p class': ['speaker-name', 'profession', 'more-info'],
  'speaker details': ['Ann-marie', 'English singer', 'Anne-marie has attained charting singles on the UK Singles Chart, including Clean Bandit"s "Rockabye" and "Ciao Adios'],
},
{
  'image src': './images/burnaboy.png',
  'image alt': 'burna-boy',
  'p class': ['speaker-name', 'profession', 'more-info'],
  'speaker details': ['Burna Boy', 'Nigerian singer, songwriter and producer', 'He rose to stardom in 2012 after releasing "Like to Party", the leadsingle from his debut studio album, L.I.F.E'],
}, {
  'image src': './images/bob marley.png',
  'image alt': 'Bob Marley',
  'p class': ['speaker-name', 'profession', 'more-info'],
  'speaker details': ['Bob Marley', 'Jamaican singer, musician, and songwriter', 'Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska and rocksteady'],
}];
for (let i = 0; i < speakerData.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList = 'speaker';
  speakersContainer.appendChild(speaker);
  const speakerImg = document.createElement('img');
  speakerImg.src = speakerData[i]['image src'];
  speakerImg.alt = speakerData[i]['image alt'];
  speakerImg.style.width = '40%';
  speaker.appendChild(speakerImg);
  const aboutSpeaker = document.createElement('div');
  aboutSpeaker.className = 'about-speaker';
  speaker.appendChild(aboutSpeaker);
  for (let j = 0; j < speakerData[0]['p class'].length; j += 1) {
    const aboutP = document.createElement('p');
    aboutP.className = speakerData[0]['p class'][j];
    aboutP.textContent = speakerData[i]['speaker details'][j];
    aboutSpeaker.appendChild(aboutP);
  }
}