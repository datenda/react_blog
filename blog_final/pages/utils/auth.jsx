export const checkToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  } else {
    return null;
  }
};
export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }
};
