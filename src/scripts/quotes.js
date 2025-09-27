const quotes = [
    'You cannot always be the best. But you can do your best.', //Vettel
    'If you don\'t take risks, you can\'t create a future.', //Luffy
    'The world\'s not perfect, but it\'s there for us, trying the best it can. That\'s what makes it so beautiful. ', //Roy Mustang, FMAB
    'Set your heart ablaze.', //Rengoku, demon slayer
    'Closing your mind to the prospect of failure will only ensure your defeat.', //Master Roshi, Dragon Ball
    'There are always things you can learn, every single day. There is always space for improvement.', //Lewis Hamilton
    'We evolve beyond the person that we were a minute before.', //Simon, Gurren Lagan
    'No one can gain without sacrificing something.',  //Ewdward Elric, FMAB
    'Move well, study well, play well, eat well, rest well!' //Master Roshi, Dragon Ball
]

const quote = quotes[Math.floor(Math.random() * quotes.length)]
document.getElementsByClassName("quote")[0].textContent = quote;