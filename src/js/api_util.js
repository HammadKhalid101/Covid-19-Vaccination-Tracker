const AppToken = require("./secret");

async function pfizerAPI() {
  return (
    await fetch(
      `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
    )
  ).json();
}

async function modernaAPI() {
  return (
    await fetch(
      `https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=${AppToken}&$limit=5000`
    )
  ).json();
}

async function janssenAPI() {
  return (
    await fetch(
      `https://data.cdc.gov/resource/w9zu-fywh.json?$$app_token=${AppToken}&$limit=5000`
    )
  ).json();
}

module.exports = { pfizerAPI, modernaAPI, janssenAPI };
