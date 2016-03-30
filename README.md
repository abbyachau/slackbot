# Pinker Slackbot

The Pinker grammar slack bot returns a grammar rule. When users type a grammar key word, such as "modifier" or "conjunction", the bot returns a grammar rule outlined by Steven Pinker. I tried to also code a bot which prompts users to tell the bot whether they indeed wanted a grammar rule. Depending on user input, the bot would either 
display a random lyric, or prompt the user to type 'grammar tips', which would trigger the aforementioned Pinker grammar bot.

The Pinker bot responds to the following inputs:

- MYHUBOT grammar tips (This returns a random grammar tip, as opposed to more specific grammar advice)
- MYHUBOT whom
- MYHUBOT modifier
- MYHUBOT conjunction
- MYHUBOT like
- MYHUBOT preposition
- MYHUBOT predicative
- MYHUBOT split
- MYHUBOT less

## Installation Instructions

1. Clone this repository. 

1. Copy the `pinker.js` file into your hubot scripts directory. For example, `myhubot/scripts`

1. In the command line, run bin/hubot to update your scripts directory.

1. Run `MYHUBOT split` to verify that the script is working. 

## Approaches

The approach taken for this bot was to use a the `robot.respond` and `msg.send` methods to return a specific grammar rule. 

## Unsolved Issues

The first bot, grammarTips, does not quite work. The bot was supposed to take user input, and either return a random song lyric, or return a message to prompt the user to type 'grammar tips', which would trigger the Pinker grammar bot. 

The Pinker bot is returning two random grammar rules instead of one.

Users would not know which key words to input to trigger the Pinker bot. For example, they won't know that the key word 'split' represents split infinitives.

Source: http://www.theguardian.com/books/2014/aug/15/steven-pinker-10-grammar-rules-break
