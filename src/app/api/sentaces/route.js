const axios = require("axios");

const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    },
});
const data = {
    prompt: "Once upon a time",
    max_token: 10,
    temperature: 0.5,
};

client
    .post("https://api.openai.com/v1/engines/davinci/completions", data)
    .then((res) => {
        console.log(res.data.choices[0].text);
    })
    .catch((error) => {
        console.error(error);
    });
