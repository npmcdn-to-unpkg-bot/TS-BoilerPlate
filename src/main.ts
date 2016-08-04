import { Observable } from 'rxjs';
import { ConsoleUtils, TerminalColors } from './utils/consoleUtils';

/** 
 * Main application class  (Entry Point)
 * @class App
 */
export class App {

    /**
     * Emits a sequence of numbers within a specified range and writes those to the console
     * @param {number} [start=1] Low bound of the range.s
     * @param {number} [count=3] Number of elements of the range.
     */
    public doSomething(start: number = 1, count: number = 3): void {

        ConsoleUtils.log(TerminalColors.Magenta, `Emit numbers from ${start} to ${start + count}`);

        var subscription = Observable.range(start, count).subscribe(
            function (x) {
                console.log('Next: ' + x);
            },
            function (err) {
                console.log('Error: ' + err);
            },
            function () {
                console.log('Completed');
            });
    }
}

// Create the app
var app = new App; 

console.log("tst");

// Invoke App methods
app.doSomething();          // Use default parameters
app.doSomething(2, 12);     // Use specified parameters 

