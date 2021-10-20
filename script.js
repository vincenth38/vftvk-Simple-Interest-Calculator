function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function compute()
{
      var principal = document.getElementById("principal").value;

      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
/*    Verify positive number is used*/
      if (principal <=0 ) {
        alert("Enter a positive number");
      var input = document.getElementById ("principal");
      input.focus ();
        return false;}
      else{

      var interest = principal * years * rate /100;
      var year = new Date().getFullYear()+parseInt(years);
      text_Result =  "\n If you deposit " +  principal +",\n"+
      "at an interest rate of "+ document.getElementById("rate").value+"%.\n"+
      "You will receive an amount of "+ interest + ",\n"+
      "in the year "+year;

      document.getElementById("result").innerText=text_Result;




      }
/*    Set the position back to the amount field*/
      var input = document.getElementById ("principal");
      input.focus ();

}
