export function presentToast(toastCtrl, text)
{
  let toast = toastCtrl.create(
  {
    message: text,
    duration: 1500,
    position: 'bottom',
    dismissOnPageChange: false
  });
  toast.present();
}

export function presentLongToast(toastCtrl, text)
{
  let toast = toastCtrl.create(
  {
    message: text,
    showCloseButton: true,
    position: 'bottom',
    dismissOnPageChange: false
  });
  toast.present();
}

export function handleError(navCtrl, error, toastCtrl)
{
  var msg = "";
  if(error.status == 401)
  {
    navCtrl.setRoot('LoginPage');
    msg = "Please log in";
  }
  else if(error.status == 500)
  {
    msg = "Internal Server Error. Please try again later.";
  }
  else if(error.status == 400)
  {
    msg = "Something went wrong. Please try again.";
  }
  else
  {
    msg = "No Internet Connection.";
  }
  if(msg != "")
  {
    presentLongToast(toastCtrl, msg);
  }
}

export function getDayMonth(date)
{
  var firstSlash = false;
  var result = "";
  for (let index = 0; index < date.length; index++) {
      var element = date.charAt(index);
      if (!firstSlash && element != '/')
      {
          result += element;
      }
      else if (!firstSlash && element == '/')
      {
        firstSlash = true;
        result += element;
      }
      else if (firstSlash && element != '/')
      {
        result += element;
      }
      else if (firstSlash && element == '/')
      {
        break;
      }
  }
  return result;
}