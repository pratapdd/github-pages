
function testing() {
    console.log('--inside testing--');
    console.log(kQuery);
  }

function kQuerycssSelector() {
    kQuery('.item').style({backgroundColor: 'grey'})
}

function kQuerycssSelectorReset() {
    kQuery('.item').style({backgroundColor: 'transparent'});
}

function replaceWith() {
    kQuery('.item').replaceWith(kQuery('.itemReplacement'));
}

function replaceWithReset() {
    kQuery('.itemReplacement').before('<div class="item">Some</div><div class="item">Item</div>')
}
