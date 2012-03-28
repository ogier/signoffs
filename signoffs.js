var randomize_signoff = function () {
    var signoffs = [
        "Adieu",
        "All the best",
        "Always",
        "Always yours",
        "Au revoir",
        "Best",
        "Best regards",
        "Best wishes",
        "Bye now",
        "Catch you later",
        "Cheers",
        "Cheerio",
        "Ciao",
        "Cordially",
        "Drive safe",
        "Forever yours",
        "Happy trails",
        "Have a good one",
        "Hugs",
        "Keep it real",
        "Kind regards",
        "Kind wishes",
        "Later",
        "Lots of love",
        "Love",
        "Love as always",
        "Many thanks",
        "Much love",
        "Peace",
        "Regards",
        "Respectfully",
        "Respectfully yours",
        "Sincerely",
        "Sincerely yours",
        "So long",
        "Stay strong",
        "Take care",
        "Take it easy",
        "Thinking of you",
        "Toodles",
        "Until next time",
        "Ta-ta for now",
        "With love",
        "With regards",
        "Yours",
        "Yours always",
        "Yours as always",
        "Yours respectfully",
        "Yours truly",
        "XOXO",
        "xx"
    ];

    var el = document.activeElement;
    if (!el.setSelectionRange) return; // not a valid text input?

    var val = el.value;
    var start = el.selectionStart;
    var end = el.selectionEnd;

    var prefix = val.substring(0, start);
    var suffix = val.substring(end);

    var tmpl = document.getElementById('__signoffs_js').getAttribute('data-template');
    var signoff = signoffs[Math.floor(Math.random() * signoffs.length)];
    var signature = tmpl.replace('{{}}', signoff);

    el.value = prefix + signature + suffix;
    el.setSelectionRange(start, start + signature.length);
};

randomize_signoff();
