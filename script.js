let cardsArray=[
{
    'name':'java',
     'img':' photo/java-p4.com.png',
},
{
    'name':'css',
    'img':'photo/pngwing.com.png',
},
{
    'name':'html',
    'img':' photo/html-p4.com.png',
},
{
    'name':'jQurey',
     'img':' photo/jQurey-p44.com.png',
},
{
    'name':'Python',
     'img':'photo/python.com.png',
},
{
    'name':'react',
     'img':'photo/react-p4.com.png',
}
];
 

const parentDiv=document.querySelector('#card-section');
const gameCard=cardsArray.concat(cardsArray); 



// let shuffledChild=Array.from(gameCard).sort(compareFn:()=>0.5-Math.random());


const myNumber=(array)=>{
    for(let i=array.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        let temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    return array;
}
const shuffledChild=myNumber(gameCard)



for (let i = 0; i < shuffledChild.length; i++) {
    const childDiv = document.createElement('div')
    childDiv.classList.add('card');
    childDiv.dataset.name=shuffledChild[i].name;
    childDiv.style.backgroundImage=`url(${shuffledChild[i].img})`
    parentDiv.appendChild(childDiv);
}