const getItem = (label, key, path) => {
  return {
    key,
    label,
    path,
  };
};
export const items = [
  getItem("Home", "home", "/"),
  getItem("About", "about", "/about"),
  getItem("Experience", "experience", "/experience"),
  getItem("Education", "education", "/education"),
  getItem("Skills", "skills", "/skills"),
  getItem("Interest", "interest", "/interest"),
];
