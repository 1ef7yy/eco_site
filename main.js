$(document).ready(function () {
		

	// решение не совсем красивое, но прямое и относительно быстрое
		
	let list1 = document.getElementById('firstList');
	
	list1.options[0] = new Option('--Выберите--', '');
	list1.options[1] = new Option('GTX 1080ti', '1080ti');
	list1.options[2] = new Option('GTX 1050 Ti', '1050ti');
	list1.options[3] = new Option('GTX 1650 SUPER', '1650s');
	list1.options[4] = new Option('GTX 1660', '1660');
	list1.options[5] = new Option('RTX 3060', '3060');
	list1.options[6] = new Option('RTX 3060 Ti', '3060ti');
	list1.options[7] = new Option('RX 6700 XT', '6700xt');
	list1.options[8] = new Option('RX 6900 XT', '6900xt');



	let list2 = document.getElementById('secondList');
	
	list2.options[0] = new Option('1', '1');
	list2.options[1] = new Option('2', '2');
	list2.options[2] = new Option('3', '3');
	list2.options[3] = new Option('4', '4');
	list2.options[4] = new Option('5', '5');
	list2.options[5] = new Option('6', '6');
	list2.options[6] = new Option('7', '7');
	list2.options[7] = new Option('8', '8');
	
});


// все стоимости потом будут добавляться в общую стоимость к дефолт ценам,
// типа райзеров и озу

let costGpu = 0;
function gpu_get(){
	let list1 = document.getElementById('firstList');
	
	// sv = selected value
	let list1SV = list1.options[list1.selectedIndex].value;

	// можно было решить и через пару объекта, но мне лень и это будет сложно, так что свич

	switch (list1SV){
		case '':
			costGpu = 0;
			break;
		case '1080ti':
			costGpu = 85000;
			
			break;

		case '1050ti':
			costGpu = 25000;
			break;

		case '1650s':
			costGpu = 45000;
			break;

		case '1660':
			costGpu = 48000;
			break;

		case '3060':
			costGpu = 83000;
			break;

		case '3060ti':
			costGpu = 100000;
			break;

		case '6700xt':
			costGpu = 110000;
			break;

		case '6900xt':
			costGpu = 160000;
			break;	

		
	}; 
	return costGpu;
}



function gpu_n(){


	let list2 = document.getElementById('secondList');
	
	// sv = selected value
	let list2SV = list2.options[list2.selectedIndex].value;
		
	return parseInt(list2SV); 
};
		


function cpu_get(){

}

function total(){
	gpuTotal = gpu_n()*gpu_get();
	document.getElementById("gpu-out").innerHTML = gpuTotal;
}