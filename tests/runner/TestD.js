fixture('Test.D')
.meta('Regression','Desktop')
.page('https://www.google.com')

test.meta('Env', 'Production')
('TestD.1', async t => {
    console.log('TestD.1');
});
test.meta('Env', 'Testing')
('TestD.2', async t => {
    console.log('TestD.2');
});