import "./style.css";
import isMobileDevice from "./checkDevice";
import data from "./data.json";
import render from "./renderCommunities";
window.onload = () => {
  emailjs.init({
    publicKey: "user_qAPjBGVe4gARH8zRHts0Q",
  });
  function sendAdressIp() {
    var templateParams = {
      name: "James",
      notes: "Check this out!",
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  }
  const communitiesContainer = document.querySelector(".communities-container");
  if (isMobileDevice()) {
    let filteredDataOnMobile = data.filter(
      (sm) => sm.name !== "discord" && sm.name !== "e-mail"
    );
    render(communitiesContainer, filteredDataOnMobile);
  } else {
    render(communitiesContainer, data);
  }

  var VisitorAPI = function (t, e, a) {
    var s = new XMLHttpRequest();
    (s.onreadystatechange = function () {
      var t;
      s.readyState === XMLHttpRequest.DONE &&
        (200 === (t = JSON.parse(s.responseText)).status
          ? e(t.data)
          : a(t.status, t.result));
    }),
      s.open("GET", "https://api.visitorapi.com/api/?pid=" + t),
      s.send(null);
  };

  VisitorAPI(
    "sf7NkNqC2XHs7x4I6cTz",
    function (data) {
      console.log(data);
      sendAdressIp();
    },
    function (errorCode, errorMessage) {
      console.log(errorCode, errorMessage);
    }
  );
};
