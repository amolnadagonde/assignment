(function(){
  const cardsContainer = document.getElementById('cardsContainer');
  const numeric_array = [1,2,3,4,5,6,7,8,9];
  let temp_array = [];
  
  const generateContent = (arrayToRender) => {
    arrayToRender.forEach(item => {
      const elem = document.createElement('div');
      elem.setAttribute('class','card');
      elem.innerText = item;
      cardsContainer.appendChild(elem);
    });
  }
  const randomizeArray = (arrayToRandomize) => {
    let counter = arrayToRandomize.length;
    let temp, index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = arrayToRandomize[counter];
      arrayToRandomize[counter] = arrayToRandomize[index];
      arrayToRandomize[index] = temp;
    }
    temp_array = arrayToRandomize;
    return temp_array;
  }

  generateContent(numeric_array);

  const shuffleBtn = document.getElementById('shuffleBtn');
  shuffleBtn.addEventListener('click',()=>{
    const newRandomArray = randomizeArray(numeric_array);
    cardsContainer.innerHTML = '';
    generateContent(newRandomArray);
  });

  const sortBtn = document.getElementById('sortBtn');
  sortBtn.addEventListener('click',()=>{
    numeric_array.sort((a,b)=> a - b);
    cardsContainer.innerHTML = '';
    generateContent(numeric_array);
  });
})();