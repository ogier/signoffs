// (Relatively) pretty source source code of the bookmarklet itself
(function(){
    var tmpl='{{}},\nAlex Ogier',
        f='http://github.com/ogier/signoffs/tree/master/signoffs.js',
        d=document,
        j=d.getElementById('__signoffs_js');
    if (j) {
        j.setAttribute('data-template', tmpl);
        randomize_signoff();
    } else {
        j=d.createElement('script');
        j.setAttribute('data-template', tmpl);
        j.id='__signoffs_js';
        j.src=f;
        d.getElementsByTagName('body')[0].appendChild(j);
    }
})();
