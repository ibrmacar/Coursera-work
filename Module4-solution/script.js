var names=new Array();
names[0]="Kenzie";
names[1]="James";
names[2]="jonhatan";
names[3]="Jeremy";
names[4]="Will";
names[5]="Smith";
names[6]="jim";
names[7]="Scarlet";
names[8]="Zona";
names[9]="jessica";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}