// utils/auth.js
export const checkToken = () => {
  // Check if window is defined to avoid server-side rendering issues
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  } else {
    return null; // or handle the absence of window.localStorage according to your needs
  }
};
