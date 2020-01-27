const Highscore = require("../models/Highscore");

module.exports = {
  async index(_, res) {
    const highs = await Highscore.find()
      .sort({ words: -1, chars: -1 })
      .limit(10);

    return res.json(highs);
  },

  async store(req, res) {
    const { name, words, chars } = req.body;

    const highs = await Highscore.find()
      .sort({ words: -1, chars: -1 })
      .limit(10);

    const lastHigh = highs[highs.length - 1];
    if (
      words > lastHigh.words ||
      (words === lastHigh.words && chars > lastHigh.chars)
    ) {
      let high = await Highscore.create({
        name,
        words,
        chars
      });
      return res.json({ high, newHighscore: true });
    } else {
      return res.json({ newHighscore: false });
    }
  }
};
