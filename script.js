const quotes = [
    {
     name:'Stephen King',
     quote:'Get busy living or get busy dying.'
    },
    {
     name:'John F.Kennedy',
     quote:'Those who dare to fail miserably can achieve greatly.'
    },{
     name:'Abraham Lincoln',
     quote:'I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.'
    },
    {
     name:'Leonardo Da Vinci',
     quote:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    }
    ,
    {
     name:'Leo Tolstoy',
     quote:'If you want to be happy, be.',
    }
    ,
    {
     name: '14th Dalai Lama',
     quote: 'Happiness is not something ready made. It comes from your own actions.'   
    },
    {
     name: '14th Dalai Lama',
     quote: 'My religion is very simple. My religion is kindness.'   
    },
    {
     name: '14th Dalai Lama',
     quote: 'Give the ones you love wings to fly, roots to come back, and reasons to stay.'   
    } 
   ]
   
   const quoteBtn = document.querySelector('#quoteBtn');
   const quoteAuthor = document.querySelector('#quoteAuthor');
   const quote = document.querySelector('#quote');

   quoteBtn.addEventListener('click', displayQuote);

   function displayQuote () {
    
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = '~ ' + quotes[number].name;
    quote.innerHTML = quotes[number].quote;

   };
