const artistiMain = document.querySelectorAll(".artistaMain")
let i=0;
for (artistaMain of artistiMain){
  const image = document.createElement('img');
  image.src = artists[i].img_url;
  artistaMain.appendChild(image);
  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  artistaMain.appendChild(infoContainer);
  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);
  const name = document.createElement('strong');
  name.innerHTML = artists[i].name;
  info.appendChild(name);
  const type = document.createElement('a');
  type.innerHTML = artists[i].type;
  info.appendChild(type);
  const icon = document.createElement('img');
  icon.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8";
  icon.classList.add("icon");
  infoContainer.appendChild(icon);
  i++;
}

const artistiInfo = document.querySelectorAll(".artistaInfo")
i=0;
for (artistaInfo of artistiInfo){
  const bio = document.createElement('p');
  bio.innerHTML = artists[i].bio;
  artistaInfo.appendChild(bio);
  const country = document.createElement('p');
  country.innerHTML = 'Paese: ' + artists[i].country;
  artistaInfo.appendChild(country);
  const label = document.createElement('p');
  label.innerHTML = 'Etichetta: ' + artists[i].label;
  artistaInfo.appendChild(label);
  const genre = document.createElement('p');
  genre.classList.add("genre");
  genre.innerHTML = 'Genere: ';
  artistaInfo.appendChild(genre);
  i++;
}

const artisti = document.querySelectorAll(".artisti")
for (artista of artisti){
  artista.addEventListener('click', resizeArtist);
  artista.addEventListener('click', getGenres); 
}

const canzoni = document.querySelectorAll(".canzoni")
for (canzone of canzoni){
  canzone.addEventListener('click', resizeSong);
}

const canzoniMain = document.querySelectorAll(".canzoneMain")
i=0;
for (const canzoneMain of canzoniMain){
  const image = document.createElement('img');
  image.src = songs[i].img_url;
  canzoneMain.appendChild(image);
  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  canzoneMain.appendChild(infoContainer);
  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);
  const name = document.createElement('strong');
  name.innerHTML = songs[i].name;
  info.appendChild(name);
  const artist = document.createElement('a');
  artist.innerHTML = songs[i].artist;
  info.appendChild(artist);  
  const icon = document.createElement('img');
  icon.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8";
  icon.classList.add("icon");
  infoContainer.appendChild(icon);
  i++;
}

const canzoniInfo = document.querySelectorAll(".canzoneInfo")
i=0;
for (canzoneInfo of canzoniInfo){
  const tempo = document.createElement('p');
  tempo.innerHTML = 'Tempo: ' + songs[i].tempo;
  canzoneInfo.appendChild(tempo);
  const key = document.createElement('p');
  key.innerHTML = 'Scala: ' + songs[i].key;
  canzoneInfo.appendChild(key);
  const date = document.createElement('p');
  date.innerHTML = 'Data di pubblicazione: ' + songs[i].date;
  canzoneInfo.appendChild(date);
  const duration = document.createElement('p');
  duration.classList.add("duration");
  duration.innerHTML = '';
  canzoneInfo.appendChild(duration);
  i++;
}

function resizeArtist(event){  
const otherContents = document.querySelectorAll(".artisti");
for(otherContent of otherContents){
  otherContent.classList.remove("unselected");
}
if(event.currentTarget.classList.contains("selected")){
  event.currentTarget.classList.remove("selected");
  event.currentTarget.classList.remove("unselected");
  event.currentTarget.querySelector('img').classList.remove("img-selected");
  event.currentTarget.querySelector('.artistaInfo').classList.remove("show");
  event.currentTarget.querySelector('.infoContainer').classList.remove("infoSelected");
}else{
  event.currentTarget.classList.remove("unselected");
  event.currentTarget.classList.add("selected");
  event.currentTarget.querySelector('img').classList.add("img-selected"); 
  event.currentTarget.querySelector('.artistaInfo').classList.add("show");
  event.currentTarget.querySelector('.infoContainer').classList.add("infoSelected");
  const selectedContent = event.currentTarget.dataset.id;
  for(otherContent of otherContents){
    if(otherContent.dataset.id !== selectedContent){
      otherContent.classList.remove("selected");
      otherContent.classList.add("unselected");
      otherContent.querySelector('img').classList.remove("img-selected");
      otherContent.querySelector('.artistaInfo').classList.remove("show");
      otherContent.querySelector('.infoContainer').classList.remove("infoSelected");
    }
  }
}  
}

function resizeSong(event){  
const otherContents = document.querySelectorAll(".canzoni");
for(otherContent of otherContents){
  otherContent.classList.remove("unselected");
}
if(event.currentTarget.classList.contains("selected")){
  event.currentTarget.classList.remove("selected");
  event.currentTarget.classList.remove("unselected");
  event.currentTarget.querySelector('img').classList.remove("img-selected");
  event.currentTarget.querySelector('.canzoneInfo').classList.remove("show");
  event.currentTarget.querySelector('.infoContainer').classList.remove("infoSelected");
}else{
  event.currentTarget.classList.remove("unselected");
  event.currentTarget.classList.add("selected");
  event.currentTarget.querySelector('img').classList.add("img-selected"); 
  event.currentTarget.querySelector('.canzoneInfo').classList.add("show");
  event.currentTarget.querySelector('.infoContainer').classList.add("infoSelected");
  const selectedContent = event.currentTarget.dataset.id;
  for(otherContent of otherContents){
    if(otherContent.dataset.id !== selectedContent){
      otherContent.classList.remove("selected");
      otherContent.classList.add("unselected");
      otherContent.querySelector('img').classList.remove("img-selected");
      otherContent.querySelector('.canzoneInfo').classList.remove("show");
      otherContent.querySelector('.infoContainer').classList.remove("infoSelected");
    }
  }
}  
}


const icons = document.querySelectorAll(".icon")
for (icon of icons){
    icon.addEventListener('click', addFavorite);
}

function addFavorite(event){
const favorites = document.querySelector(".favoriteContainer");
favorites.classList.add("container");
if(event.currentTarget.classList.contains("favorite")){
  event.currentTarget.classList.remove("favorite");
  event.currentTarget.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8"
  removeFavorite(event);
  hideFavorites(favorites);
}else{
  event.currentTarget.classList.add("favorite");
  event.currentTarget.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828884.svg?token=exp=1619280362~hmac=02281581f8012685967feb7fb3203f9a" 
  const favoriteCard =  document.createElement('div');
  favoriteCard.classList.add("favoriteCard")
  const image = document.createElement('img');
  image.src = event.currentTarget.parentNode.parentNode.querySelector("img").src;
  image.classList.add('img');
  favoriteCard.appendChild(image);   
  const favoriteMain = document.createElement('div');
  favoriteMain.classList.add('artistiMain');
  favoriteCard.appendChild(favoriteMain);
  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  favoriteMain.appendChild(infoContainer);
  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);
  const name = document.createElement('strong');
  name.innerHTML = event.currentTarget.parentNode.querySelector("strong").innerHTML;
  info.appendChild(name);
  const detail = document.createElement('a');
  detail.innerHTML = event.currentTarget.parentNode.querySelector("a").innerHTML;
  detail.classList.add('detail');
  info.appendChild(detail);  
  const icon = document.createElement('img');
  icon.src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828884.svg?token=exp=1619280362~hmac=02281581f8012685967feb7fb3203f9a";
  icon.classList.add("icon");
  infoContainer.appendChild(icon);    
  favorites.appendChild(favoriteCard);
  icon.addEventListener('click', removeFavorite);
  hideFavorites(favorites);
}
}

function removeFavorite(event){
const favorites = document.querySelectorAll(".favoriteCard");
for(favorite of favorites){
  if(favorite.children[1].querySelector("strong").innerHTML === event.currentTarget.parentNode.parentNode.querySelector("strong").innerHTML){
    favorite.remove();
    const artisti = document.querySelectorAll(".artistaMain");
    for(artista of artisti){
      if(artista.children[1].querySelector("strong").innerHTML === favorite.children[1].querySelector("strong").innerHTML){
        artista.children[1].querySelector("img").src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8"
      }
    }
    const canzoni = document.querySelectorAll(".canzoneMain");
    for(canzone of canzoni){
      if(canzone.children[1].querySelector("strong").innerHTML === favorite.children[1].querySelector("strong").innerHTML){
        canzone.children[1].querySelector("img").src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1619280353~hmac=98bba0f72c25430a7ea803b3df4fc3a8"
      }
    }
    const favoriteContainer = document.querySelector(".favoriteContainer");
    hideFavorites(favoriteContainer);
  }
}
}

function hideFavorites(favoriteContainer){
if(favoriteContainer.childNodes.length <= 1){
  favoriteContainer.parentNode.classList.add('hidden');
}else{
  favoriteContainer.parentNode.classList.remove('hidden');
} 
}

const inputs = document.querySelectorAll('.searchBar');
for(input of inputs){
input.addEventListener('keyup', search);
}

function search(event){
const filter = event.currentTarget.value.toUpperCase();
const elements = event.currentTarget.parentNode.parentNode.parentNode.querySelector('.container').children;
for(element of elements){
  if(element.querySelector('strong').innerHTML.toUpperCase().indexOf(filter) > -1){
    element.classList.remove('hidden');
  }else{
    element.classList.add('hidden');
  }
}
}

function onJson(json)
{
  const durationMs = json.track.duration;
  const durationSec = durationMs / 1000;
  const durationMin = durationSec / 60;
  const intPart = parseInt(durationMin, 10);
  const decimalPart = durationMin - intPart;
  const decimalPartRounded =  Math.floor(decimalPart * 100) / 100;
  const trackSec = parseInt((decimalPartRounded * 60), 10);
  const canzoni = document.querySelectorAll('.canzoni');
  for(canzone of canzoni)
  {
    if(canzone.children[0].querySelector('strong').innerHTML === json.track.name && canzone.children[0].querySelector('a').innerHTML === json.track.artist.name)
    {
      canzone.children[1].querySelector('.duration').innerHTML = "Durata: "+intPart+" min "+trackSec+" sec";
    }
  }
}

function onJson1(json)
{
  //console.log(json.artists.items[0].genres);
  const genres = json.artists.items[0].genres;
  for(artista of artisti)
  {
    if(artista.children[0].querySelector('strong').innerHTML === json.artists.items[0].name)
    {
      if(artista.children[1].querySelector('.genre').innerHTML === 'Genere: ')
      for(i=0; i<genres.length; i++)
      {
        if(i === genres.length - 1)
        {
          artista.children[1].querySelector('.genre').innerHTML += (genres[i]);
        }
        else
        {
          artista.children[1].querySelector('.genre').innerHTML += (genres[i]+', ');
        }
      }
    }
  }
}


function onResponse(response)
{
  return response.json();
}

function getDuration(event)
{
  const track = event.currentTarget.children[0].querySelector('strong').innerHTML;
  const track_value=encodeURIComponent(track);
  const artist = event.currentTarget.children[0].querySelector('a').innerHTML;
  const artist_value=encodeURIComponent(artist);
  const rest_url='http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key='+api_key+'&artist='+artist_value+'&track='+track_value+'&format=json';
  fetch(rest_url).then(onResponse).then(onJson);
}

const api_key = '68d27cb63434a8605cf3244ee3b6ab31';
const tracks = document.querySelectorAll('.canzoni');
for(track of tracks)
  {
   track.addEventListener('click', getDuration); 
  }

  function getGenres(event)
{
  const artist = event.currentTarget.children[0].querySelector('strong').innerHTML;
  const artist_value=encodeURIComponent(artist);
  
  fetch("https://api.spotify.com/v1/search?type=artist&q=" + artist_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponse).then(onJson1);
}

  function onTokenJson(json)
  {
    token = json.access_token;
  }
  
  function onTokenResponse(response)
  {
    return response.json();
  }
  

  const client_id = '6aa705d1d9e340679e5eef64399de25c';
  const client_secret = '913982b611044effbb25f4907dbc6a7d';

  let token;

  fetch("https://accounts.spotify.com/api/token",
    {
     method: "post",
     body: 'grant_type=client_credentials',
     headers:
     {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
     }
    }
  ).then(onTokenResponse).then(onTokenJson);
