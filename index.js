let age = 23;
let status;


switch (true){
    case age < 18:
    status = "Minor";
    break;
    
    case age >=18 && age <= 65:
    status = "Adult";
    if(age>=21){
      status += "(Over21)";
    }
    break;
    
    default  :
    status = "Senior Citizen";
    break;
}
 console.log(status);