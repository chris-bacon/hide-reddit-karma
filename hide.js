const upvoteButtons = {
  data: document.querySelectorAll("button[id^=upvote-button]"),
  f: upvoteButton => {
    var karmaScore = upvoteButton.nextSibling;
    
    if (karmaScore) {
      var downvoteButton = upvoteButton.nextSibling.nextSibling
      deleteHtmlNodes([upvoteButton, karmaScore, downvoteButton]);
  }
}

const ariaLabelUpvoteButtons = {
  data: document.querySelectorAll("button[aria-label^=upvote]"),
  f: ariaUpvoteButton => {
    var downvoteButton = ariaUpvoteButton.nextSibling;
    deleteHtmlNodes([ariaUpvoteButton, downvoteButton]);
  }
}

const commentPoints = {
  data: document.querySelectorAll(".Comment > div > div > span"),
  f: deleteHtmlNodes
}

// ---------------------------------------

const targets = [upvoteButtons, ariaLabelUpvoteButtons, commentPoints];

// ---------------------------------------

function deleteHtmlNodes(targets) {
  targets.forEach(target => if(target.parentNode) target.parentNode.removeChild(target));
}

// ---------------------------------------

const run = ts => ts.forEach(target => target.data.forEach(d => target.f))

// ---------------------------------------

run(targets);

window.addEventListener('load', () => run(targets));
