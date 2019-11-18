export const TOPLEVEL = ["HTML"]

export const SKILLS = {
  HTML: {
    score: 0,
    title: "HTML",
    unlocks: ["HTMLStyle","JavaScript","HTMLElements","HTMLAttributes"],
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!",
    links: [
      "https://www.w3schools.com/html/default.asp",
      "https://developer.mozilla.org/en-US/docs/Web/HTML"
    ]
  },
  HTMLElements: {
    title: "HTML Elements",
    score:0,
    unlocks: [],
    description:
      "The HTML element is everything from the start tag to the end tag. HTML elements can be nested elements can contain elements. All HTML documents consist of nested HTML elements.",
    links: [
      "https://www.w3schools.com/html/html_elements.asp",
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
    ]
  },
  HTMLAttributes: {
    title: "HTML Attributes",
    score:0,
    unlocks: [],
    description:
      "Attributes provide additional information about HTML elements.",
    links: [
      "https://www.w3schools.com/html/html_attributes.asp",
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
    ]
  },
  HTMLStyle: {
    title: "HTML Style",
    score:0,
    unlocks: ["CSS"],
    description:
      "Setting the style of an HTML element, can be done with the style attribute.",
    links: [
      "https://www.w3schools.com/html/html_styles.asp",
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style"
    ]
  }
};
