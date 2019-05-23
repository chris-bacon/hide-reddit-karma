const upvoteButtons = {
  data: document.querySelectorAll("button[id^=upvote-button]"),
  f: upvoteButton => {
    var karmaScore = upvoteButton.nextSibling
    
    if (karmaScore) {
      deleteHtml(upvoteButton)
      deleteHtml(karmaScore)
      deleteHtml(downvoteButton)
  }
}

const ariaLabelUpvoteButtons = {
  data: document.querySelectorAll("button[aria-label^=upvote]"),
  f: ariaUpvoteButton => {
    var downvoteButton = ariaUpvoteButton.nextSibling

    deleteHtml(ariaUpvoteButton)
    deleteHtml(downvoteButton)
  }
}

const commentPoints = {
  data: document.querySelectorAll(".Comment > div > div > span"),
  f: deleteHtml
}

// ---------------------------------------

const targets = [upvoteButtons, ariaLabelUpvoteButtons, commentPoints]

// ---------------------------------------

function deleteHtml(target) {
  if (target && target.parentNode) target.parentNode.removeChild(target)
}

// ---------------------------------------

const run = ts => ts.forEach(target => target.data.forEach(d => target.f))

// ---------------------------------------

run(targets)

window.addEventListener('load', () => run(targets));
