function getAuthorsAvatar(avatar?: string): string {
  if (!avatar) {
    return "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg";
  }

  if (avatar.includes("secure.gravatar")) {
    return avatar.substring(1);
  }
  return `https://image.tmdb.org/t/p/w300${avatar}`;

}

export default getAuthorsAvatar;
