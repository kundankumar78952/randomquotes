const btn = document.getElementById('btn');

const output = document.querySelector(".output");

let quote = ["You have to believe in yourself when no one else does.",

 "When you have a dream, you’ve got to grab it and never let go.",

"The most important thing is to enjoy your life—to be happy—it’s all that matters.",

"Spread love everywhere you go. Let no one ever come without leaving happier.",

"Be yourself; everyone else is already taken.",

"If you’re going to make a living, you’re going to have to live it.",

"The biggest adventure you can take is to live the life of your dreams.",

"The best way to live your life is to live with it.",

"Life is what happens to you when you’re busy making other plans.",

"The only thing we have to fear is fear itself.",

"I can accept failure, everyone fails at something. But I can’t accept not trying."];

btn.addEventListener('click', () => {
   
    let random = Math.floor(Math.random() *quote.length)
    output.textContent = quote[random];
});