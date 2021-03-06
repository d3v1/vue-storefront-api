import AbstractUserProxy from '../abstract/user'
import { multiStoreConfig } from './util'

class UserProxy extends AbstractUserProxy {
    constructor (config, req){
        const Magento2Client = require('magento2-rest-client').Magento2Client;
        super(config, req)
        this.api = Magento2Client(multiStoreConfig(config.magento2.api, req));
    }       

    register (userData) { 
        return this.api.customers.create(userData)
    }
    
    login (userData) { 
        return this.api.customers.token(userData)
    } 

    me (requestToken) { 
        return this.api.customers.me(requestToken)
    }        
    orderHistory (requestToken) { 
        return this.api.customers.orderHistory(requestToken)
    }         
    resetPassword (emailData) { 
        return this.api.customers.resetPassword(emailData)
    }       

    update (userData) {
        return this.api.customers.update(userData)
    }

    changePassword (passwordData) {
        return this.api.customers.changePassword(passwordData)
    }
}

module.exports = UserProxy