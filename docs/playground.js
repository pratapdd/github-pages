
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
