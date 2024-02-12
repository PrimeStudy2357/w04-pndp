const { default: axios } = require("axios");

axios.get("https://youtube.com/").then((res) => {
    console.log(res.data);
    console.log(res.status);
});