const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "__cf_bm=ck8qlq3fmaMdVmXWFoYpl.i3jxnkd6rUbTwylGEZnY8-1795077879.0801249-1.0.1.1-aHwfY7SFRN51M27Sh7ASAgU0ZOo3r04fXyc6NaKU.aJOPGt8WHcj5QCjMtWJo8TmTH3giTu9b_xyLVW5Qdaka.VcFltKpjM9d8lwga.21JyO.ncNds7F5ws7SbrC9Z5A");

const raw = JSON.stringify({
  "model": "openai/gpt-oss-20b",
  "input": "Explain the importance of fast language models"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.groq.com/openai/v1/responses", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));