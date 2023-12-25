export const getImage = (profile) => {
  const profileImages = profile?.imgs;
  let imageurl = '';

  if (profileImages?.length > 0) {
    if (profileImages[profileImages?.length - 1]?.id) {
      imageurl = `https://lh3.googleusercontent.com/d/${
        profileImages[profileImages?.length - 1]?.id
      }`;
    } else {
      if (profile?.info?.gender?.toLowerCase() === 'male') {
        imageurl = `${require('../static/profile/male.jpg')}`;
      } else {
        imageurl = `${require('../static/profile/female.jpg')}`;
      }
    }
  } else {
    if (profile?.info?.gender?.toLowerCase() === 'male') {
      imageurl = `${require('../static/profile/male.jpg')}`;
    } else {
      imageurl = `${require('../static/profile/female.jpg')}`;
    }
  }

  return imageurl;
};

export const getImagebyid = (profileImage) => {
  return `https://lh3.googleusercontent.com/d/${profileImage?.id}`;
};
