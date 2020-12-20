fixture('Test.A')
.meta('Regression','Mobile')
.page('https://www.google.com')

test.meta('Env', 'Production')
('TestA.1', async t => {
    console.log('TestA.1');
});
test.meta('Env', 'Testing')
('TestA.2', async t => {
    console.log('TestA.2 - Test');
});