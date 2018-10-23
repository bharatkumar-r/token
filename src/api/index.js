import { Router } from 'express';
import httpReq from '../lib/httpReq';
 
export default ({ config, constants }) => {

        let api = Router();

        api.get('/token', (req, res) => {
            
            let url = constants.fetchToken + config.commerceTools.projectKey;
            let headers = {};
            headers.Authorization = 'Basic ' + new Buffer(config.commerceTools.credentials.clientId + ':' + config.commerceTools.credentials.clientSecret).toString("base64");
            
            console.log('access token url... ', url);
            httpReq
                .httpPost(url, null, false, headers, false)
                .then(function(results) {
                    console.info('token results.....',results);
                    res.json(results);
                });
        });

        return api;
}
