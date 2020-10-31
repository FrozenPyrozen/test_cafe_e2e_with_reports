//Imports
import { Selector, t, ClientFunction} from 'testcafe';

//Required
const dataSet = require('../../data/data.json');

//Global Variables
const getURL = ClientFunction(() => window.location);

fixture('Data Driven Test Demo')


dataSet.forEach(data =>{
    console.log(data)
    test.page('http://the-internet.herokuapp.com/login')
    (`Login Page - ${data.expectedResult} `, async t => {

        await t
        .maximizeWindow()
        .typeText(Selector('input#username'), data.username)
        .typeText(Selector('input#password'), data.password)
        .click('button')

        t.expect(Selector("div#flash").innerText, data.expectedResult)
        

    })
});
