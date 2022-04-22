module.exports = {
    devServer: {
        proxy: {
            "https://aurorainc.amocrm.ru":{
                "target" : "https://aurorainc.amocrm.ru",
                "changeOrigin": true,
                "secure": false
            }
        },
        headers: {
            'Access-Control-Allow-Origin': "*" 
        }
    }
}