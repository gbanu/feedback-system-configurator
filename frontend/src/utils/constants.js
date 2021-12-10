export const DIR = {
  // baseURL: "http://localhost:3000",
  baseURL: "",
  configurator: "/configurator",
  feedback: "/feedback",
  home: "/",
  manage: "/manage",
  login: "/login",
  register: "/register",
};

export const LABELS = {
  continue: "Continue",
  createNew: "Create new",
  edit: "Edit",
  myForms: "My Forms",
  preview: "Preview",
  login: "Login",
  specifyInput: "Specify Input",
  defineGoal: "Define Goal",
  design: "Design",
  configureCrowd: "Configure Crowd",
  share: "Share",
};

export const QUESTION_TYPE = {
  multiple: "Multiple choice",
  single: "Single choice",
  rating: "Raiting",
  textarea: "Free text",
  input: "Input",
  slider: "Slider",
  likert: "7-point Likert Scale",
  yesno: "Yes/No",
};

export const YES_NO = [
  { value: true, label: "yes" },
  { value: false, label: "no" },
];

export const LIKERT = [
  { value: 1, label: "Very strongly disagree" },
  { value: 2, label: "Strongly disagree" },
  { value: 3, label: "Disagree" },
  { value: 4, label: "Neutral" },
  { value: 5, label: "Agree" },
  { value: 6, label: "Strongly agree" },
  { value: 7, label: "Very strongly agree" },
];

export const feedbackTypeOptions = [
  { label: "Qualitative", value: "Qualitative" },
  { label: "Quantitative", value: "Quantitative" },
];

export const feedbackScopeOptions = [
  { label: "Functional", value: "Functional" },
  { label: "Non-functional", value: "Non-functional" },
  { label: "Content", value: "Content" },
];

export const goalOptions = [
  { label: "Generate new ideas", value: "Generate" },
  { label: "Assess current system", value: "Assess" },
];

export const measures = [
  { label: "System quality", value: "System quality" },
  { label: "Usability", value: "Usability" },
  { label: "Utilization", value: "Utilization" },
  { label: "User satisfaction", value: "User satisfaction" },
  { label: "Personal benefits", value: "Personal benefits" },
];

export const CROWD = [
  {
    label: "Anonymous users",
    value: "anonymous",
    description:
      "Best incentive for anonymous users is financial reward. See platform recommendations below.",
  },
  {
    label: "Actual and potential users",
    value: "proxy",
    description:
      "You can directly sent invitation link to your actual and potential users.",
  },
  {
    label: "Social networks",
    value: "social",
    description:
      "Post the invitation link to your social media account and ask your social contacts to participate.",
  },
  {
    label: "Web forum users",
    value: "forum",
    description:
      "Post the inviataion link to the forum of your choice. See platform recommendations below.",
  },
  {
    label: "Students",
    value: "students",
    description:
      "Use this option if you are conducting a feedback solicitation in a classroom. Students are usually incentivized by course credits and social contacts.",
  },
  {
    label: "Friends and family",
    value: "convenience",
    description:
      "You can use this option in combination with other. Send the invitation link to your friends and family.",
  },
];

export const INCENTIVE = [
  { label: "Financial", value: "financial" },
  {
    label: "Involvement and improvement",
    value: "involvement and improvement",
  },
  {
    label: "Interest and social compensation",
    value: "interest and social comenstion",
  },
  { label: "Credits", value: "credits" },
];

export const PLATFORMS_TO_SHARE = {
  anonymous: ["MTurk", "Mobile-Works", "Upwork"],
  social: ["facebook groups"],
  forum: ["dribble", "Reddit"],
  classroom: ["Classrom"],
};
