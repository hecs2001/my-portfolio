const introduction = {
  text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fermentum eu dignissim; mus quis interdum magnis sociosqu ligula. Congue curabitur velit eleifend dignissim gravida nisl gravida. Nascetur facilisis orci class magna vitae platea non. Class erat tellus felis, erat diam fermentum id. Euismod laoreet ligula ultricies risus ridiculus.",
};

const education = [
  {
    id: 0,
    course: "Bachelor of Science in Computer Science",
    school: "De La Salle University - Dasmariñas",
    year: {
      start: 2019,
      end: null,
    },
  },
  {
    id: 1,
    course: "Information Communication and Technology",
    school: "Lyceum of the Philippines University - Cavite",
    year: {
      start: 2017,
      end: 2019,
    },
  },
];

const workExperience = [
  {
    id: 0,
    title: "IT Technical Support",
    company: "FiveTwenty IT Services",
    startDate: {
      startYear: 2023,
      startMonth: 7,
    },
    endDate: {
      endYear: 2023,
      endMonth: 10,
    },
  },
];

const devSkills = [
  { id: 0, skill: "HTML5", progress: 90 },
  { id: 1, skill: "CSS3", progress: 85 },
  { id: 2, skill: "JavaScript", progress: 68 },
  { id: 3, skill: "React JS", progress: 40 },
  { id: 4, skill: "Python", progress: 65 },
  { id: 5, skill: "Django", progress: 10 },
];

const socialLinks = [
  { id: 0, social: "LinkedIn", link: "https://www.linkedin.com/in/hecs" },
  { id: 1, social: "GitHub", link: "https://github.com/hecs2001" },
  { id: 2, social: "Instagram", link: "https://www.instagram.com/art.hecs/" },
];

export { introduction, education, workExperience, devSkills, socialLinks };
