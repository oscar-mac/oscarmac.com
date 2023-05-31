function setTime() {
  const y = 2023; // year
  const m = (5 - 1); // month (zero-indexed)
  const d = 31; // day
  const h = 11; // hour (24 hr time)
  const n = 35; // minute
  const updated_at = new Date(y, m, d, h, n, 0);
  const today = new Date();
  const time_since = today - updated_at;
  
  let time_phrase;
  const hour_ms = 3600000;
  const day_ms = 86400000;
  const week_ms = 1209600000;
  const month_ms = 2628000000;
  
  if (time_since < hour_ms) time_phrase = "few moments"
  else if (time_since < day_ms) time_phrase = "few hours"
  else if (time_since < (day_ms * 2)) time_phrase = "day"
  else if (time_since < week_ms) time_phrase = "few days"
  else if (time_since < (week_ms * 2)) time_phrase = "week"
  else if (time_since < month_ms) time_phrase = "few weeks"
  else if (time_since < (month_ms * 2)) time_phrase = "month"
  else time_phrase = "months";
  
  document.querySelector(".js-last-updated").innerText = `A ${time_phrase} ago`;
}

function setEmailCopy() {
  const el = document.querySelector(".js-email-copy");
  
  el.addEventListener("click", function (e) {
    e.preventDefault();
    
    const text = el.innerText;
    
    navigator.clipboard.writeText(text).then(function () {
      el.innerText = "Email copied!"
    }, function (err) {
      console.error('Could not copy email.', err);
    });
    
    setTimeout(function () {
      el.innerText = text;
    }, 2000);
  })
}

function setJobText() {
  const titles = [
    "designer",
    "developer",
    "mobile developer",
    "web developer",
    "front-end developer",
    "designer-developer",
    "product designer",
  ];
  
  const title_element = document.querySelector(".js-job-title");
  
  function getJobTitle() {
    return titles[Math.floor(Math.random() * titles.length)];
  }
  
  title_element.addEventListener("click", function (e) {
    const current = title_element.innerText;
    let selection = getJobTitle();
    
    while (current === selection) {
      console.log(current, selection);
      selection = getJobTitle();
    }
    
    title_element.innerText = selection;
  });
}

function setCityText() {
  const titles = [
    "Melbourne,",
    "Narrm,",
    "Collingwood,",
    "Yállabirrang,",
  ];
  
  const title_element = document.querySelector(".js-city-name");
  
  function getCityName() {
    return titles[Math.floor(Math.random() * titles.length)];
  }
  
  title_element.addEventListener("click", function (e) {
    const current = title_element.innerText;
    let selection = getCityName();
    
    while (current === selection) {
      console.log(current, selection);
      selection = getCityName();
    }
    
    title_element.innerText = selection;
  });
}

(function run() {
  setEmailCopy();
  setJobText();
  setCityText();
  setTime();
})();
