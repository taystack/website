// Add certificates here
// https://www.testdome.com/cert/4b546d69c2af4cebab5f88c9e453556e


export const codingPractives = {};

export const testingPractices = {
  TDD: {},
  Unit: {},
};

export const testingFrameworks = {
  JavaScript: {
    jest: {},
    enzyme: {},
    "testing-library/react": {},
  },
  ruby: {
    rspec: {},
    capybara: {},
  },
};

export const frameworks = {
  JavaScript: {
    Bootstrap: {},
    Angular: {},
    React: {},
  },
  HTML: {
    erb: {},
    html: {},
  },
  Python: {
    Flask: {},
  },
  Ruby: {
    Rails: {},
  },
};

export const skillTags = [
  "JavaScript",
  "HTML",
  "CSS3",
  "Ruby",
  "Python",
  "Framework",
  "Testing",
];

export const message = {
  first: {
    title: "(Cracks knuckles…)",
    text: "I've done my best to evaluate my own personal skills. Below is an interactive assessment. The evaluation was done using various public tests. Links to these skill tests will be down below.",
  },
};

const skills = {
  JavaScript: {
    frameworks: frameworks.JavaScript,
    testingFrameworks: testingFrameworks.JavaScript,
  },
  HTML: {
    frameworks: frameworks.HTML,
  },
  CSS3: {},
  Ruby: {
    frameworks: frameworks.Ruby,
    testingFrameworks: testingFrameworks.JavaScript,
  },
};

export default skills;
