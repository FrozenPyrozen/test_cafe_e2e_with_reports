import {Selector, t} from 'testcafe';

class HomePage{

    constructor(){
        this.logoutBtn = Selector('a.secondary');
        this.responseCard = Selector('div#flash');
    };


    async clickLogoutButton (){
        await t
        .click(this.logoutBtn);
    };

}

export default new HomePage();