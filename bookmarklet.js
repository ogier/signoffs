// (Relatively) pretty source source code of the bookmarklet itself.
// This gets jammed into an HTML attribute, so be careful.
(function(){
    var name='Alex Ogier',
        f='https://raw.github.com/ogier/signoffs/gh-pages/signoffs.js',
        i=document.getElementById('canvas_frame'),
        w=i?i.contentWindow:window,
        d=w.document,
        j=d.getElementById('__signoffs_js');
    if(j){
        w.randomize_signoff(name);
    }else{
        j=d.createElement('script');
        j.setAttribute('data-name',name);
        j.id='__signoffs_js';
        j.src=f;
        d.getElementsByTagName('body')[0].appendChild(j);
    }
})();
