const iframes = document.getElementsByTagName('iframe');
for (var i=0; i<iframes.length; i++) {
    var b;
    try {
        b = iframes[i].contentDocument.body;
        console.log(b);
    } catch (e) {
        continue;
    }
    // debugger;
    if (b.spellcheck === false) {
        b.spellcheck = true;
    }
}
