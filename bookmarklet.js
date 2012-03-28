// (Relatively) pretty source source code of the bookmarklet itself.
// This gets jammed into an HTML attribute, so be careful
(function(){
    var tmpl='{{}},\nAlex Ogier',
        f='http://ogier.github.com/signoffs/signoffs.js',
        d=document,
        j=d.getElementById('__signoffs_js');
    if(j){
        j.setAttribute('data-template',tmpl);
        randomize_signoff();
    }else{
        j=d.createElement('script');
        j.setAttribute('data-template',tmpl);
        j.id='__signoffs_js';
        j.src=f;
        d.getElementsByTagName('body')[0].appendChild(j);
    }
})();
