// (Relatively) pretty source source code of the bookmarklet itself.
// This gets jammed into an HTML attribute, so be careful.
(function(){
    var name='Alex Ogier',
        f='https://raw.github.com/ogier/signoffs/gh-pages/signoffs.js',
        d=document.getElementById('canvas_frame').contentDocument||document,
        j=d.getElementById('__signoffs_js');
    if(j){
        randomize_signoff();
    }else{
        j=d.createElement('script');
        j.setAttribute('data-name',name);
        j.id='__signoffs_js';
        j.src=f;
        d.getElementsByTagName('body')[0].appendChild(j);
    }
})();
