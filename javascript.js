var quotes = [
"Don't cry because it's over, smile because it happened. <br>&mdash; Dr. Seuss",
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. <br>&mdash; Marilyn Monroe",
"Be yourself; everyone else is already taken. <br>&mdash; Oscar Wilde",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. <br>&mdash; Albert Einstein",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. <br>&mdash; Bernard M. Baruch",
"So many books, so little time. <br>&mdash; Frank Zappa",
"You've gotta dance like there's nobody watching, \nLove like you'll never be hurt, \nSing like there's nobody listening, \nAnd live like it's heaven on earth. <br>&mdash; William W. Purkey",
"A room without books is like a body without a soul. <br>&mdash; Marcus Tullius Cicero",
"You only live once, but if you do it right, once is enough. <br>&mdash; Mae West",
"Be the change that you wish to see in the world. <br>&mdash; Mahatma Gandhi",
"No one can make you feel inferior without your consent. <br>&mdash; Eleanor Roosevelt, This is My Story",
"Without music, life would be a mistake. <br>&mdash; Friedrich Nietzsche, Twilight of the Idols",
"Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. <br>&mdash; Rob Siltanen",
"We accept the love we think we deserve. <br>&mdash; Stephen Chbosky, The Perks of Being a Wallflower"
];
function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length) );
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
function tweet() {
   var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
 window.open(twtLink,'_blank');
}
