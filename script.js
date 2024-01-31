const display= document.getElementById('display')

function appendToDisplay(input)
{
         display.value += input;
}

function all_clear()
{
         display.value = " ";
}

function calculate()
{
         try{
            display.value = eval(display.value)
         }
         catch(error)
         {
            display.value = "MathError"
         }
}
