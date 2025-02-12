export const getImageUrl = (path) => {
    return new URL(`../images/${path}`, window.location.href).href;
  };