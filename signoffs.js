var randomize_signoff = function () {
    var signoffs = [
        "Ciao",
        "Cheers",
        "Regards"
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
