import {ClientFunction} from 'testcafe';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const loginUrl = 'http://the-internet.herokuapp.com/login';
const homeUrl = 'http://the-internet.herokuapp.com/secure';
const getUrl = ClientFunction(() => window.location.href);
let responseCardText = '';

fixture('Home Page')
.page(loginUrl)
.beforeEach(async t => {
    await LoginPage.setUserName('tomsmith');
    await LoginPage.setPassword('SuperSecretPassword!');
    await LoginPage.clickLoginButton();
});


test('Loading Login Page', async t => {

    await t
    .expect(getUrl()).eql(homeUrl)
    .expect(HomePage.logoutBtn.exists).ok();

});

test('Succesfully Logout', async t => {

    await t
    .click(HomePage.logoutBtn);

    responseCardText = await LoginPage.responseCard.innerText;

    await t.expect(responseCardText).contains('You logged out of the secure area!');

});