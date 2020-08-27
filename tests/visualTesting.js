import { takeSnapshot } from 'testcafe-blink-diff';
import { Selector, t, ClientFunction} from 'testcafe';

fixture('Snapshots')
  .page('https://www.google.co.cr/');


let testName = '';

test('Google Testing ', async t => {
  await takeSnapshot(t);
});

test('Google Testing after search - Var 1', async t => {
  
    //How to get the test name assigned in a variable
    testName = t.testRun.test.name;

    //Page interactions
    await t
        .typeText('input.gLFyf', 'John Doe')
        .click('input.gNO89b')

    //Snapshot code

    //Scenario 1/Breakpoint 1: Search in breakpoint of 1600 * 1200 - Width * Height
    //The snapshot will be taken in full page

    await t.resizeWindow(1600,1000);

    await takeSnapshot(t, `${testName} - Breakpoint 1`, {
        fullPage: false, 
        timeout:2000
    });


  });

  test('Google Testing after search - Car 2', async t => {
  
    //How to get the test name assigned in a variable
    testName = t.testRun.test.name;

    //Page interactions
    await t
        .typeText('input.gLFyf', 'John Doe')
        .click('input.gNO89b')

    //Snapshot code

    //Scenario 1/Breakpoint 1: Search in breakpoint of 1600 * 1200 - Width * Height
    //The snapshot will be taken in full page

    await t.resizeWindow(900,1000);

    await takeSnapshot(t, `${testName} - Breakpoint 2`, {
        fullPage: false, 
        timeout:2000
    });


  });