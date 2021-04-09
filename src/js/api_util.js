const AppToken = require("./secret");

const pfizerAPI = fetch(
  `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
).then((res) => {
  if (!res.ok) {
    throw Error("Api call unsuccessful");
  } else {
    // alert("Received Pfizer");
    return res.json();
  }
});

const modernaAPI = fetch(
  `https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=${AppToken}&$limit=5000`
).then((res) => {
  if (!res.ok) {
    throw Error("Api call unsuccessful");
  } else {
    // alert("Received Moderna");
    return res.json();
  }
});

const janssenAPI = fetch(
  `https://data.cdc.gov/resource/w9zu-fywh.json?$$app_token=${AppToken}&$limit=5000`
).then((res) => {
  if (!res.ok) {
    throw Error("Api call unsuccessful");
  } else {
    // alert("Received Janssen");
    return res.json();
  }
});

module.exports = { pfizerAPI, modernaAPI, janssenAPI };

// module.exports = { pfizerAPI };
