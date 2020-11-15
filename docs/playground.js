

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
    kQuery('.second_marker').after('<div class="second_item">Some</div><div class="second_item">Item</div>')
}


function style() {
    kQuery('.third_item').style({backgroundColor: 'grey'})
}

function styleReset() {
    kQuery('.third_item').style({backgroundColor: 'transparent'});
}
