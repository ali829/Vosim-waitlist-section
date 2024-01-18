const render = (domElem, data) => {
  let html = ``;

  data.forEach((element, index) => {
    html += `<a href="${element.link}" target="_blank">
    <div class="community-item" style="background-color: ${element.color}">
      <img src="${element.icon}" alt="" />
      <p>${element.name}</p>
    </div>
  </a>`;
  });
  domElem.innerHTML = html;
};

export default render;
