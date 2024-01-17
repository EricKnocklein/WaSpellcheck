const iframes = document.getElementsByTagName('iframe');
// debugger;
for (var i=0; i<iframes.length; i++) {
    var b;
    try {
        b = iframes[i].contentDocument.body;
        console.log(b);
    } catch (e) {
        console.log(i);
        continue;
    }
    // debugger;
    if (b.spellcheck === false) {
        b.spellcheck = true;
    }
}
