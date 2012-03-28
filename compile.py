#!/usr/bin/env python
import os
import sys

from markdown import markdown

def compile():
    _dir = os.path.dirname(__file__)

    # ghetto minify the bookmarklet js
    with open(os.path.join(_dir, 'bookmarklet.js'), 'r') as f:
        bookmarklet = f.readlines()
        bookmarklet = ''.join(s.split('//')[0].strip() for s in bookmarklet)

    # process the readme file with markdown
    # and stick the minified bookmarklet in it
    with open(os.path.join(_dir, 'README.md'), 'r') as f:
        readme = f.read()
        readme = markdown(readme)
        if readme.find('{{bookmarklet}}') == -1:
            raise Exception('Could not find {{bookmarklet}} marker in README')
        # here be unsafe hackery
        readme = readme.replace('{{bookmarklet}}', bookmarklet)

    # extract the static bits of index.html
    with open(os.path.join(_dir, 'index.html'), 'r') as f:
        html = f.read()
        prefix = html.split('<!-- start of compiled README -->')[0]
        suffix = html.split('<!-- end of compiled README -->')[-1]
        if prefix == html or suffix == html:
            raise Exception('Could not find <!-- compiled README --> markers')

    # now write it all back
    with open(os.path.join(_dir, 'index.html'), 'w') as out:
        out.write(prefix)
        out.write('<!-- start of compiled README -->\n')
        out.write(readme)
        out.write('\n<!-- end of compiled README -->')
        out.write(suffix)

if __name__ == '__main__':
    compile()
