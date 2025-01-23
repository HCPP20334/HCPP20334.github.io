class Device{
    userDeviceArray = [
        {device: 'Android', platform: /Android/},
        {device: 'iPhone', platform: /iPhone/},
        {device: 'iPad', platform: /iPad/},
        {device: 'Symbian', platform: /Symbian/},
        {device: 'Windows Phone', platform: /Windows Phone/},
        {device: 'Tablet OS', platform: /Tablet OS/},
        {device: 'Linux', platform: /Linux/},
        {device: 'Windows', platform: /Windows NT/},
        {device: 'Macintosh', platform: /Macintosh/}
    ];
     platform = navigator.userAgent;
    getDevice() {
        for (var i in userDeviceArray) {
            if (userDeviceArray[i].platform.test(platform))
             {
                return userDeviceArray[i].device;
              }
            }
    }
}