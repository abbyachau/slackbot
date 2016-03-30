//Here are grammar tips

tips = [
	"A modifier can dangle when its implied subject is the writer and the reader.", "It's a good habit to at least consider moving an adverb to the end of the verb phrase.", "The real decision is not whether to use 'that' or 'which' but whether to use a restrictive or a nonrestrictive relative clause.", "The best advice to writers is to calibrate their use of 'whom' to the complexity of the construction and the degree of formality they desire."
]

whom = [
	"The best advice to writers is to calibrate their use of 'whom' to the complexity of the construction and the degree of formality they desire."
]

modifier = [
	"A modifier can dangle when its implied subject is the writer and the reader."
]

conjunction = [
	"There is nothing wrong with beginning a sentence with a conjunction."
]

like = [
	"Writers are free to use either 'like' or 'as', mindful only that 'as' is a bit more formal."
]


preposition = [
	"A preposition should be stranded at the end of a sentence when it contributes a crucial bit of information, as in 'music to read by', 'something to guard against', or when it pins down the meaning of an idiom."
]

predicative = [
	"The choice between 'It is he' and 'It is him' is strictly one of formal versus informal style."
]


split = [
	"There is not the slightest reason to interdict an adverb from the position before the main verb, and great writers in English have placed it there for centuries."
]


unique = [
	"Uniqueness is not like pregnancy and marriage; it must be defined relative to some scale of measurement."
]

less = [
	"'Less' is perfectly natural with a singular count noun, and is idiomatic in certain expressions in which a quantity is being compared to a standard. It's also natural when the entity being quantified is a continuous extent and the count noun refers to units of measurement"
]

//Instructs users to type 'grammar tips' if they want help with grammar.
//This code does not appear to work. 

module.exports = function(robot) {
robot.respond(/I (.*) want grammar tips./i, function(res) {
  var grammarTips;
  grammarTips = res.match[1];
  if (grammarTips === "no") {
    return res.reply("Ok. Have these lyrics instead: Dr. Filth, he keeps his world / Inside of a leather cup");
  } else {
    return res.reply("Great, now type 'grammar tips'");
  }
});
}


//Users type in a key word ('whom, modifier', etc) and obtain an associated grammar tip from Pinsky.
//Typing in 'grammar tips' would return a random grammar tip. 

module.exports = function(robot) {
  var pinkerTips;
  robot.respond(/grammar tips\b/i, function(msg) {
    		return msg.send(msg.random(tips));
  });
  robot.respond(/whom\b/i, function(msg) {
    		return msg.send(msg.random(whom));
  });
    robot.respond(/modifier\b/i, function(msg) {
    		return msg.send(msg.random(modifier));
  });
    robot.respond(/conjunction\b/i, function(msg) {
    		return msg.send(msg.random(conjunction));
  });
    robot.respond(/like\b/i, function(msg) {
    		return msg.send(msg.random(like));
  });
    robot.respond(/preposition\b/i, function(msg) {
    		return msg.send(msg.random(preposition));
  });
    robot.respond(/predicative\b/i, function(msg) {
    		return msg.send(msg.random(predicative));
  });
    robot.respond(/split\b/i, function(msg) {
    		return msg.send(msg.random(split));
  });
      robot.respond(/less\b/i, function(msg) {
    		return msg.send(msg.random(less));
  });
}