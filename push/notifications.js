const OneSignal = require('onesignal-node');
const client = new OneSignal.Client(
  '123172b3-2a1e-43a6-8400-09aa2fb17b24',
  'YmYxOTlmNTgtMDliYy00YThkLTgzMTMtMTBjZGM1OGJmMDVi'
);

const sendNotification = async (title, des, userid) => {
  console.log(userid);
  const notification = {
    name: title,
    contents: {
      en: des,
    },
    chrome_web_icon: 'https://cdn-icons-png.flaticon.com/512/7572/7572110.png',
    chrome_web_badge: 'https://cdn-icons-png.flaticon.com/512/7572/7572110.png',
    include_aliases: { "external_id": [userid]},
    target_channel: 'push',
    isChromeWeb: true,
    isAnyWeb: true,

  };

  try {
    const response = await client.createNotification(notification);
    console.log(response.body);
  } catch (e) {
    if (e instanceof OneSignal.HTTPError) {
      console.log(e.statusCode);
      console.log(e.body);
    }
  }
};

const registerADevice = async (id) => {
  const response = await client.addDevice({
    device_type: 5,
    identifier: id,
    external_user_id: id,
  });
  // console.log(response.body);
};

module.exports = { sendNotification, registerADevice };
