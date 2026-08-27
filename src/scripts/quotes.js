const quotes = [
    { text: 'You cannot always be the best. But you can do your best.', author: 'Sebastian Vettel' },
    { text: 'There are always things you can learn, every single day. There is always space for improvement.', author: 'Lewis Hamilton' },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: 'Thomas Edison' },
    { text: 'The most dangerous phrase in the language is, "We\'ve always done it this way."', author: 'Grace Hopper' },
    { text: 'The first principle is that you must not fool yourself — and you are the easiest person to fool.', author: 'Richard Feynman' },
    { text: "You miss 100% of the shots you don't take.", author: 'Wayne Gretzky' },
    { text: "I've failed over and over and over again in my life, and that is why I succeed.", author: 'Michael Jordan' },
    { text: 'Nothing in life is to be feared, it is only to be understood.', author: 'Marie Curie' },
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];
const quoteEl = document.getElementsByClassName('quote')[0];

quoteEl.textContent = '';
quoteEl.append(`“${quote.text}” `);

const authorEl = document.createElement('span');
authorEl.className = 'quote-author';
authorEl.textContent = `— ${quote.author}`;
quoteEl.appendChild(authorEl);
