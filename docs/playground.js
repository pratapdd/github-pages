

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
    kQuery('.second_marker').after('<div class="second_item">Some</div><div class="second_item">Item</div>');
}


function setStyle() {
    kQuery('.third_item').style({backgroundColor: 'grey'});
}

function styleReset() {
    kQuery('.third_item').style({backgroundColor: 'transparent'});
}


function remove() {
    kQuery('.fourth_item').remove();
}

function removeReset() {
    kQuery('.fourth_marker').after('<div class="fourth_item">Some</div><div class="fourth_item">Item</div>');
}

let fifthSpan;
function find() {
    fifthSpan = kQuery('.fifth_item').find('span');
}

function findReset() {
    console.log('reset')
    console.log(fifthSpan);
    if (fifthSpan) {
        fifthSpan.remove();
    }
    kQuery('fifth_marker').after('<div class="fifth_item">Hello <span>World!</span></div><div class="fifth_item">World! <span>Hello</span></div>');
}


function before() {
    kQuery('.sixth_inner').before('<p class="sixth_extra">Text</p>');
}

function beforeReset() {
    kQuery('.sixth_extra').remove();
}


function after() {
    kQuery('.seventh_inner').after('<p class="seventh_extra">Text</p>');
}

function afterReset() {
    kQuery('.seventh_extra').remove();
}
