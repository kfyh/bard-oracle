// ============================================================
//  The Bard's Oracle — oracle.js
// ============================================================

const SONNETS = [
  {
    n: 1,
    themes: ["beauty","youth","self","rose","heir","legacy","bloom","procreation"],
    lines: [
      ["From fairest creatures we desire increase,","That thereby beauty's rose might never die,","But as the riper should by time decease,","His tender heir might bear his memory:"],
      ["But thou, contracted to thine own bright eyes,","Feed'st thy light's flame with self-substantial fuel,","Making a famine where abundance lies,","Thyself thy foe, to thy sweet self too cruel."],
      ["Thou that art now the world's fresh ornament","And only herald to the gaudy spring,","Within thine own bud buriest thy content","And, tender churl, mak'st waste in niggarding."],
      ["Pity the world, or else this glutton be,","To eat the world's due, by the grave and thee."]
    ]
  },
  {
    n: 18,
    themes: ["summer","compare","lovely","temperate","weather","season","nature","eternal","beauty","time"],
    lines: [
      ["Shall I compare thee to a summer's day?","Thou art more lovely and more temperate.","Rough winds do shake the darling buds of May,","And summer's lease hath all too short a date."],
      ["Sometime too hot the eye of heaven shines,","And often is his gold complexion dimmed;","And every fair from fair sometime declines,","By chance, or nature's changing course, untrimmed;"],
      ["But thy eternal summer shall not fade,","Nor lose possession of that fair thou ow'st,","Nor shall death brag thou wand'rest in his shade,","When in eternal lines to Time thou grow'st."],
      ["So long as men can breathe, or eyes can see,","So long lives this, and this gives life to thee."]
    ]
  },
  {
    n: 29,
    themes: ["fortune","disgrace","outcast","envy","wish","wealth","lark","happy","joy","grief","despair","hope"],
    lines: [
      ["When in disgrace with Fortune and men's eyes,","I all alone beweep my outcast state,","And trouble deaf heaven with my bootless cries,","And look upon myself and curse my fate,"],
      ["Wishing me like to one more rich in hope,","Featured like him, like him with friends possessed,","Desiring this man's art, and that man's scope,","With what I most enjoy contented least;"],
      ["Yet in these thoughts myself almost despising,","Haply I think on thee, and then my state,","Like to the lark at break of day arising","From sullen earth, sings hymns at heaven's gate;"],
      ["For thy sweet love remembered such wealth brings","That then I scorn to change my state with kings."]
    ]
  },
  {
    n: 30,
    themes: ["memory","grief","sorrow","friend","loss","past","tears","time","remembrance","death","mourn"],
    lines: [
      ["When to the sessions of sweet silent thought","I summon up remembrance of things past,","I sigh the lack of many a thing I sought,","And with old woes new wail my dear time's waste;"],
      ["Then can I drown an eye, unused to flow,","For precious friends hid in death's dateless night,","And weep afresh love's long since cancelled woe,","And moan the expense of many a vanished sight."],
      ["Then can I grieve at grievances foregone,","And heavily from woe to woe tell o'er","The sad account of fore-bemoaned moan,","Which I new pay as if not paid before."],
      ["But if the while I think on thee, dear friend,","All losses are restored and sorrows end."]
    ]
  },
  {
    n: 55,
    themes: ["monument","stone","time","war","death","eternity","power","glory","kings","memory","marble"],
    lines: [
      ["Not marble nor the gilded monuments","Of princes shall outlive this powerful rhyme,","But you shall shine more bright in these contents","Than unswept stone besmeared with sluttish time."],
      ["When wasteful war shall statues overturn,","And broils root out the work of masonry,","Nor Mars his sword nor war's quick fire shall burn","The living record of your memory."],
      ["'Gainst death and all oblivious enmity","Shall you pace forth; your praise shall still find room","Even in the eyes of all posterity","That wear this world out to the ending doom."],
      ["So, till the Judgement that yourself arise,","You live in this, and dwell in lovers' eyes."]
    ]
  },
  {
    n: 60,
    themes: ["time","waves","sea","ocean","minutes","age","change","glory","transience","fleeting","shore"],
    lines: [
      ["Like as the waves make towards the pebbled shore,","So do our minutes hasten to their end,","Each changing place with that which went before,","In sequent toil all forwards do contend."],
      ["Nativity, once in the main of light,","Crawls to maturity, wherewith being crowned,","Crooked eclipses 'gainst his glory fight,","And Time that gave doth now his gift confound."],
      ["Time doth transfix the flourish set on youth,","And delves the parallels in beauty's brow,","Feeds on the rarities of nature's truth,","And nothing stands but for his scythe to mow."],
      ["And yet to times in hope my verse shall stand,","Praising thy worth, despite his cruel hand."]
    ]
  },
  {
    n: 66,
    themes: ["tired","death","disgrace","folly","shame","art","good","evil","wrong","weary","world","captive","injustice"],
    lines: [
      ["Tired with all these, for restful death I cry,","As to behold desert a beggar born,","And needy nothing trimmed in jollity,","And purest faith unhappily forsworn,"],
      ["And gilded honour shamefully misplaced,","And maiden virtue rudely strumpeted,","And right perfection wrongfully disgraced,","And strength by limping sway disabled,"],
      ["And art made tongue-tied by authority,","And folly, doctor-like, controlling skill,","And simple truth miscalled simplicity,","And captive good attending captain ill."],
      ["Tired with all these, from these would I be gone,","Save that to die I leave my love alone."]
    ]
  },
  {
    n: 73,
    themes: ["autumn","age","twilight","fire","decay","death","bare","cold","winter","sunset","old","embers","love","ruin"],
    lines: [
      ["That time of year thou mayst in me behold","When yellow leaves, or none, or few, do hang","Upon those boughs which shake against the cold,","Bare ruined choirs, where late the sweet birds sang."],
      ["In me thou seest the twilight of such day","As after sunset fadeth in the west,","Which by and by black night doth take away,","Death's second self that seals up all in rest."],
      ["In me thou seest the glowing of such fire","That on the ashes of his youth doth lie,","As the deathbed whereon it must expire,","Consumed with that which it was nourished by."],
      ["This thou perceiv'st, which makes thy love more strong,","To love that well which thou must leave ere long."]
    ]
  },
  {
    n: 116,
    themes: ["love","marriage","mind","true","impediment","tempest","star","error","ever","constant","time","compass","doom"],
    lines: [
      ["Let me not to the marriage of true minds","Admit impediments. Love is not love","Which alters when it alteration finds,","Or bends with the remover to remove."],
      ["O no! it is an ever-fixed mark","That looks on tempests and is never shaken;","It is the star to every wand'ring bark,","Whose worth's unknown, although his height be taken."],
      ["Love's not Time's fool, though rosy lips and cheeks","Within his bending sickle's compass come;","Love alters not with his brief hours and weeks,","But bears it out even to the edge of doom."],
      ["If this be error and upon me proved,","I never writ, nor no man ever loved."]
    ]
  },
  {
    n: 130,
    themes: ["mistress","music","voice","eyes","sun","coral","snow","red","roses","white","beauty","woman","real","compare"],
    lines: [
      ["My mistress' eyes are nothing like the sun;","Coral is far more red than her lips' red;","If snow be white, why then her breasts are dun;","If hairs be wires, black wires grow on her head."],
      ["I have seen roses damasked, red and white,","But no such roses see I in her cheeks;","And in some perfumes is there more delight","Than in the breath that from my mistress reeks."],
      ["I love to hear her speak, yet well I know","That music hath a far more pleasing sound.","I grant I never saw a goddess go;","My mistress when she walks treads on the ground."],
      ["And yet, by heaven, I think my love as rare","As any she belied with false compare."]
    ]
  }
];

// ── Local keyword-based matching (fallback) ──────────────────
function localMatch(word) {
  const w = word.toLowerCase();
  let best = null, bestScore = -1;

  for (const s of SONNETS) {
    let score = 0;
    for (const k of s.themes) {
      if (k === w) score += 10;
      else if (k.includes(w) || w.includes(k)) score += 5;
    }
    const fullText = s.lines.flat().join(" ").toLowerCase();
    const wordMatches = (fullText.match(new RegExp("\\b" + w, "g")) || []).length;
    score += wordMatches * 3;
    if (fullText.includes(w)) score += 1;
    if (score > bestScore) { bestScore = score; best = s; }
  }
  return best;
}

// ── Claude API matching ───────────────────────────────────────
async function askClaude(word) {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 20,
        messages: [{
          role: "user",
          content: `User entered the word: "${word}". From Shakespeare sonnets 1, 18, 29, 30, 55, 60, 66, 73, 116, 130 — which number best fits this word thematically or literally? Reply with ONLY the number.`
        }]
      })
    });
    const data = await response.json();
    const num = parseInt(data.content?.[0]?.text?.trim(), 10);
    return SONNETS.find(s => s.n === num) || null;
  } catch (_) {
    return null;
  }
}

// ── Reason line ───────────────────────────────────────────────
function buildReason(sonnet, word) {
  const w = word.toLowerCase();
  const themeMatch = sonnet.themes.find(k => k === w || k.includes(w) || w.includes(k));
  const inVerse = sonnet.lines.flat().join(" ").toLowerCase().includes(w);

  if (themeMatch && inVerse) return `"${word}" resonates through both theme and verse in this sonnet.`;
  if (themeMatch) return `"${word}" echoes the heart of this sonnet — ${sonnet.themes.slice(0, 3).join(", ")}.`;
  if (inVerse) return `"${word}" appears within the verse itself, making this a fitting match.`;
  return `This sonnet's meditation on ${sonnet.themes[0]} and ${sonnet.themes[1]} speaks most closely to "${word}".`;
}

// ── Highlight matched word in a line ─────────────────────────
function highlightWord(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(
    new RegExp(`(${escaped})`, "gi"),
    '<span class="highlight">$1</span>'
  );
}

// ── Render the sonnet card into #sonnet-output ────────────────
function renderSonnet(sonnet, word) {
  const container = document.getElementById("sonnet-output");

  const stanzasHTML = sonnet.lines.map(stanza =>
    `<div class="stanza">${stanza.map(line => `<p>${highlightWord(line, word)}</p>`).join("")}</div>`
  ).join("");

  container.innerHTML = `
    <div class="card">
      <div class="sonnet-num">SONNET ${sonnet.n}</div>
      <div class="sonnet-author">William Shakespeare</div>
      <div class="sonnet-lines">${stanzasHTML}</div>
      <div class="reason">${buildReason(sonnet, word)}</div>
    </div>
  `;
}

// ── Main entry point called by the button / Enter key ────────
async function seekSonnet() {
  const input    = document.getElementById("word-input");
  const statusEl = document.getElementById("status");
  const outputEl = document.getElementById("sonnet-output");
  const btn      = document.getElementById("seek-btn");

  const word = input.value.trim();

  if (!word) {
    statusEl.textContent = "Pray, enter a word first.";
    return;
  }
  if (!/^[a-zA-Z]+$/.test(word)) {
    statusEl.textContent = "A single word of letters, if you please.";
    return;
  }

  statusEl.textContent = "";
  outputEl.innerHTML = "";
  btn.disabled = true;

  let dots = 1;
  const dotInterval = setInterval(() => {
    dots = dots >= 3 ? 1 : dots + 1;
    statusEl.textContent = "Consulting the Bard" + ".".repeat(dots);
  }, 400);

  let sonnet = await askClaude(word);
  if (!sonnet) sonnet = localMatch(word);

  clearInterval(dotInterval);
  statusEl.textContent = "";
  btn.disabled = false;

  renderSonnet(sonnet, word);
}

// ── Wire up events after the DOM is ready ────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("seek-btn").addEventListener("click", seekSonnet);
  document.getElementById("word-input").addEventListener("keydown", e => {
    if (e.key === "Enter") seekSonnet();
  });
});