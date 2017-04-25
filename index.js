getMobileOperatingSystem();


function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  console.log(userAgent);

  var url= window.location.href;

  console.log(url);
  var referralCode=url.split("?").pop();

    var ua=userAgent.toLowerCase();
    if (ua.indexOf("android") > -1) {

        var playStoreLink="https://play.google.com/store/apps/details?id=com.perpule.customerapp&referral="+referralCode+"&user_agent="+userAgent;
        sendReferralData(playStoreLink,userAgent,referralCode);
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {

        var appStoreLink="https://itunes.apple.com/app/id1185771236";
        sendReferralData(appStoreLink,userAgent,referralCode);
    }

}

function sendReferralData(link,userAgent,referralCode)
{
    $.post(
        'http://30.productquery2014.appspot.com/resources/v1/referral/conversion',
         {"user_agent":userAgent,"referralCode":referralCode,"status":"NO","customerId":""}, 
         function(result) 
         { 
             var iframe = document.createElement('iframe');
              iframe.style.visibility = 'hidden';
              
              iframe.onload = function noapp() { window.location=link; };
              document.body.appendChild(iframe);
                        
         }

    );
                   
}