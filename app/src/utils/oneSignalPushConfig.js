window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;

export const initOneSignal = () => {
    return OneSignal.push(()=> {
        OneSignal.init(
          {
            appId: "123172b3-2a1e-43a6-8400-09aa2fb17b24",
            promptOptions: {
              slidedown: {
                enabled: true,
                actionMessage: "Get notified for the new Messages, Matches, Latest Profile Updates and much more",
                acceptButtonText: "Allow",
                cancelButtonText: "don't allow",
                categories: {
                    tags: [
                        {
                            tag: "message",
                            label: "Messages",
                        },
                        {
                          tag: "match",
                          label: "Match Requests",
                        },
                        {
                          tag: "matches",
                          label: "New Matches",
                        },
                        {
                          tag: "profile",
                          label: "Profile Updates",
                        }
                    ]
                }     
            } 
          },
          welcomeNotification: {
            "title": "shadimakes.com",
            "message": "You're now allowes to get notified. Thanks.",
          } 
        },
          //Automatically subscribe to the new_app_version tag
          OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
            // Callback called when tag has finished sending
            console.log('new_app_version TAG SENT', tagsSent);
          })
        );
      });
}