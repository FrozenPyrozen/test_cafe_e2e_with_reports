fixture('Test.C')
.meta('Regression','Desktop')
.page('https://www.google.com')

test.meta('Env', 'Production')
('TestC.1', async t => {
    console.log('TestC.1');
});
test.meta('Env', 'Testing')
('TestC.2', async t => {
    console.log('TestC.2');
});