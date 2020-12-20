fixture('Test.B')
.meta('Regression','Mobile')
.page('https://www.google.com')

test.meta('Env', 'Production')
('TestB.1', async t => {
    console.log('TestB.1');
});
test.meta('Env', 'Testing')
('TestB.2', async t => {
    console.log('TestB.2');
});