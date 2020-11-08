import {ClientFunction} from 'testcafe';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const url = 'http://the-internet.herokuapp.com/login';
const getUrl = ClientFunction(() => window.location.href);
let responseCardText = '';

fixture('Login Page')
.page(url)

test('Loading Login Page', async t => {

    await t
    .expect(getUrl()).eql(url)
    .expect(LoginPage.loginBtn.exists).ok();

});

test('FORM - Sucessfully User Login', async t => {

    await LoginPage.setUserName('tomsmith');
    await LoginPage.setPassword('SuperSecretPassword!');
    await LoginPage.clickLoginButton();

    responseCardText = await HomePage.responseCard.innerText;
    
    await t.expect(responseCardText).contains('You logged into a secure area');

});

test('FORM - Invalid User Name Login', async t => {

    await LoginPage.setUserName('testUser');
    await LoginPage.setPassword('SuperSecretPassword!');
    await LoginPage.clickLoginButton();

    responseCardText = await LoginPage.responseCard.innerText;

    await t.expect(responseCardText).contains('Your username is invalid!');

});

test('FORM - Invalid Password Login', async t => {

    await LoginPage.setUserName('tomsmith');
    await LoginPage.setPassword('test');
    await LoginPage.clickLoginButton();

    responseCardText = await LoginPage.responseCard.innerText;

    await t.expect(responseCardText).contains('Your password is invalid!');

});

