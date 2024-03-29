const generateUrlFriendly = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
}

export default generateUrlFriendly;
