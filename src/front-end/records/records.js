import { CS, PORTFOLIO, PROGRAMMING } from "../page/pageReducer";
import ChessGame from "./portfolio/chess/ChessGame";

const README = "README";

export const subjects = {
  portfolio: {
    chess: [{ file: README, start: new Date(2022, 5, 15), end: "" }],
    community: [
      { file: README, start: new Date(2021, 7, 1), end: new Date(2021, 7, 21) },
    ],
    board: [
      {
        file: README,
        start: new Date(2020, 12, 19),
        end: new Date(2020, 12, 23),
      },
    ],
    movieRecommend: [
      {
        file: README,
        start: new Date(2020, 3, 19),
        end: new Date(2020, 4, 19),
      },
    ],
    javaSwingProject: [
      { file: README, start: new Date(2019, 5, 15), end: new Date(2019, 6, 4) },
    ],
  },
  cs: {
    network: [],
    os: [],
    ca: [],
    database: [],
  },
  programming: {
    java: [],
    javascript: [],
    python: [],
    c: [],
  },
};

export const getContents = (category, subject) => {
  return subjects[category][subject].map((item, index) => ({
    category: category,
    subject: subject,
    content: item,
  }));
};

export const selectPortfolio = (name) => {
  switch (name) {
    case "chess":
      return <ChessGame />;
    default:
  }
};
