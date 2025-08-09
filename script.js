const clickme = document.querySelector("button");
console.log("clickme", clickme);
const output = document.querySelector(".output");
console.log("output", output);

const url = "https://emoji-api.com/emojis?access_key=9c44c39594895a8bbc87e317455c02633b8a5b0d";

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

clickme.addEventListener("click",async() => {
  console.log("Button clicked");

  let getData = await fetch(url);
  getData = await getData.json();

    //used for testing
  console.log("getData length ", getData.length);
  console.log("getData", getData);
  console.log(getRandom(),"getRandom");                                        
  console.log("random getDataObject",getData[200]);
  console.log("random getRandomData",getData[getRandom(getData.length)]);


  const randomNum = getRandom(getData.length);
  const character = getData[randomNum].character;
  const uniCode = getData[randomNum].unicodeName;
  console.log("character", character);
  console.log("uniCode", uniCode);
  clickme.textContent = character;
  output.textContent = uniCode
});