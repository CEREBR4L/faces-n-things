
var FacesNThings = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "i11", "i12", "i13", "i14", "i15", "i16", "i17", "i18", "i19", "i20", "i21", "i22", "i23"];

document.getElementById('face').classList.add(FacesNThings[Math.floor(Math.random() * FacesNThings.length)]);

document.getElementById('face').addEventListener('click', function () {

	var face = Math.floor(Math.random() * FacesNThings.length);
	//remove the possibility of getting the same thing twice coz like no one like that...
	if(FacesNThings[face] === this.classList[1]){

		if(face === 22){
			face = 1;
			console.log("haha")
		}
		else{
			face = face +  1;
			console.log("lol")
		}

		console.log(face);

	}

	this.className = "icon";

	this.classList.add(FacesNThings[face]);

});

