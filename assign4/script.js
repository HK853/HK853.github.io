var names = new Array();

names[0] = "John";
names[1] = "johny";
names[2] = "joe";
names[3] = "ronny";
names[4] = "yaakov";
names[5] = "emma";

for(var i=0; i<names.length; i++)
{
    if(names[i].charAt(0)=='j' || names[i].charAt(0)=='J')
    {
        console.log("Goodbye " + names[i]);
    }else{
        console.log("Hello " + names[i]);
    }
}