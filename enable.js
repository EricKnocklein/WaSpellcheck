function enable() {
  const iframes = document.getElementsByTagName("iframe");
  for (var i = 0; i < iframes.length; i++) {
    var b;
    try {
      b = iframes[i].contentDocument.body;
    } catch (e) {
      continue;
    }
    if (b.spellcheck === false) {
      b.spellcheck = true;
    }
  }
}

enable();
