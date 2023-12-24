export const getImage = (profile) => {
  const profileImages = profile?.imgs;
  let imageurl = '';

  if (profileImages[0]?.id) {
    imageurl = `https://lh3.googleusercontent.com/d/${profileImages[0]?.id}`;
  } else {
    if (profile?.info?.gender?.toLowerCase() === 'male') {
      imageurl = `${require('../static/profile/male.jpg')}`;
    } else {
      imageurl = `${require('../static/profile/female.jpg')}`;
    }
  }

  return imageurl;
};
