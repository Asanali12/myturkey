module.exports = {
    devServer: {
        proxy: "https://heartfelt-crumble-fdad9d.netlify.app/",
        headers: {
            'Access-Control-Allow-Origin': "*" 
        }
    }
}