const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney",
    },
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author : "Steve Jobs",
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author : "James Cameron",
    },
    {
        quote : "You must be the change you wish to see in the world.",
        author : "Mahatma Gandhi",
    },
    {
        quote : "The only thing we have to fear is fear itself.",
        author : "Franklin D. Roosevelt",
    },
    {
        quote : "Be yourself; everyone else is already taken.",
        author : "Oscar Wilde",
    },
    {
        quote : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author : "Martin Luther King Jr.",
    },
    {
        quote : "Do one thing every day that scares you. ",
        author : "Eleanor Roosevelt",
    },
    {
        quote : "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author : "Helen Keller",
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
