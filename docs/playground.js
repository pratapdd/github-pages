
function testing() {
    console.log('--inside testing--');
    console.log(kQuery);
  }

function kQuerycssSelector() {
    kQuery('.first_item').style({backgroundColor: 'grey'})
}

function kQuerycssSelectorReset() {
    kQuery('.first_item').style({backgroundColor: 'transparent'});
}

function replaceWith() {
    kQuery('.second_item').replaceWith(kQuery('.second_itemReplacement'));
}

function replaceWithReset() {
    kQuery('.second_itemReplacement').before('<div class="item">Some</div><div class="item">Item</div>')
}
