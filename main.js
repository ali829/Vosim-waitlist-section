import "./style.css";
import isMobileDevice from "./checkDevice";
import data from "./data.json";
import render from "./renderCommunities";
window.onload = () => {
  const communitiesContainer = document.querySelector(".communities-container");
  if (isMobileDevice()) {
    let filteredDataOnMobile = data.filter(
        (sm) => (sm.name !== "discord" && sm.name !== "e-mail") 
      );
      render(communitiesContainer,filteredDataOnMobile)
  } else {
    render(communitiesContainer, data);
  }
};
