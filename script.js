function clearDisplay() {
    document.getElementById('display').value='';

}
 function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1)
 }
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value
}
 function calculateResult() {
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error'
    }
 }

























// // app.js
// function Calculator() {
//     const [displayValue, setDisplayValue] = React.useState('');

//     const handleButtonClick = (value) => {
//         if (value === 'C') {
//             setDisplayValue('');
//         } else if (value === 'DEL') {
//             setDisplayValue(displayValue.slice(0, -1));
//         } else if (value === '=') {
//             try {
//                 setDisplayValue(eval(displayValue).toString());
//             } catch {
//                 setDisplayValue('Error');
//             }
//         } else {
//             setDisplayValue(displayValue + value);
//         }
//     };

//     return (
//         <div className="calculator">
//             <input type="text" id="display" value={displayValue} disabled />
//             <div className="buttons">
//                 {['C', 'DEL', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'].map(button => (
//                     <button key={button} className="btn" onClick={() => handleButtonClick(button)}>{button}</button>
//                 ))}
//             </div>
//         </div>
//     );
// }

