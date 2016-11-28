// JavaScript version 
$(document).ready(function() {

	var bloodFruitSeasonList = [];
	var bloodVegSeasonList = [];

	function removeFruitDuplicates(arr) {
		var newBloodFruitSeasonList = [];
		arr.forEach(function(val){
		 if (newBloodFruitSeasonList.indexOf(val) === -1){
				newBloodFruitSeasonList.push(val);
			}
		});
		return newBloodFruitSeasonList;
	}

	function removeVegDuplicates(arr) {
		var newBloodVegSeasonList = [];
		arr.forEach(function(val){
			if(newBloodVegSeasonList.indexOf(val) === -1){
				newBloodVegSeasonList.push(val);
			}
		});
		return newBloodVegSeasonList;
	}

	function cleanUp(arr1, arr2){
		var newArr = [];
		arr1.forEach(function(arr1val){
			arr2.forEach(function(arr2val){
				if(arr1.indexOf(arr2val) !== -1){
					newArr.push(arr2val);
				}
			});
		});
		return newArr;
	} 

	$("#result").on("click", function(e) {
		e.preventDefault();
	
		var foodItem = $("#bloodtype").val();
		var season = $("#season").val();

		// foodItem sort -----------------------------------	
		// winter ---------------
		if (foodItem === "O" && season === "Win") {
			bloodFruitSeasonList  = cleanUp(fruitO, fruitWinter);
			bloodVegSeasonList = cleanUp(vegO, vegWinter);
		 }
	 	else if (foodItem === "A" && season === "Win") {
			bloodFruitSeasonList = cleanUp(fruitA, fruitWinter);
			bloodVegSeasonList = cleanUp(vegA, vegWinter);
		}
		else if (foodItem === "B" && season === "Win") {
			bloodFruitSeasonList = cleanUp(fruitB, fruitWinter);
			bloodVegSeasonList = cleanUp(vegB, vegWinter);
		}
		else if (foodItem === "AB" && season === "Win") {
			bloodFruitSeasonList = cleanUp(fruitAB, fruitWinter);
			bloodVegSeasonList = cleanUp(vegAB, vegWinter);
		}
		else if (foodItem === "Z" && season === "Win") {
			bloodFruitSeasonList = fruitWinter;
			bloodVegSeasonList = vegWinter;
		}
		// spring  --------------------------------------------
		else if (foodItem === "O" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitSpring);
			bloodVegSeasonList = cleanUp(vegO, vegSpring);
		}
		else if (foodItem === "A" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitA, fruitSpring);
			bloodVegSeasonList = cleanUp(vegA, vegSpring);
		}
		else if (foodItem === "B" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitB, fruitSpring);
			bloodVegSeasonList = cleanUp(vegB, vegSpring);
		}
		else if (foodItem === "AB" && season === "Spr") {
			bloodFruitSeasonList = cleanUp(fruitAB, fruitSpring);
			bloodVegSeasonList = cleanUp(vegAB, vegSpring);
		}
		else if (foodItem === "Z" && season === "Spr") {
			bloodFruitSeasonList = fruitSpring;
			bloodVegSeasonList = vegSpring;
		}
		// summer  -------------------------------------------
		else if (foodItem === "O" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitSummer);
			bloodVegSeasonList = cleanUp(vegO, vegSummer);
		}
		else if (foodItem === "A" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitA, fruitSummer);
			bloodVegSeasonList = cleanUp(vegA, vegSummer);
		}
		else if (foodItem === "B" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitB, fruitSummer);
			bloodVegSeasonList = cleanUp(vegB, vegSummer);
		}
		else if (foodItem === "AB" && season === "Sum") {
			bloodFruitSeasonList = cleanUp(fruitAB, fruitSummer);
			bloodVegSeasonList = cleanUp(vegAB, vegSummer);
		}
		else if (foodItem === "Z" && season === "Sum") {
			bloodFruitSeasonList = fruitSummer;
			bloodVegSeasonList = vegSummer;
		}
		// fall -----------------------------------------------
		else if (foodItem === "O" && season === "Aut") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitAutumn);
			bloodVegSeasonList = cleanUp(vegO, vegAutumn);
		}
		else if (foodItem === "A" && season === "Aut") {
			bloodFruitSeasonList = cleanUp(fruitA, fruitAutumn);
			bloodVegSeasonList = cleanUp(vegA, vegAutumn);
		}
		else if (foodItem === "B" && season === "Aut") {
			bloodFruitSeasonList = cleanUp(fruitB, fruitAutumn);
			bloodVegSeasonList = cleanUp(vegB, vegAutumn);
		}
		else if (foodItem === "AB" && season === "Aut") {
			bloodFruitSeasonList = cleanUp(fruitAB, fruitAutumn);
			bloodVegSeasonList = cleanUp(vegAB, vegAutumn);
		}
		else if (foodItem === "Z" && season === "Aut") {
			bloodFruitSeasonList = fruitAutumn;
			bloodVegSeasonList = vegAutumn;
		}
		// aya  ------------------------------------------------
		else if (foodItem === "O" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitO, fruitAllYearAround);
			bloodVegSeasonList = cleanUp(vegO, vegAllYearAround);
		}
		else if (foodItem === "A" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitA, fruitAllYearAround);
			bloodVegSeasonList = cleanUp(vegA, vegAllYearAround);
		}
		else if (foodItem === "B" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitB, fruitAllYearAround);
			bloodVegSeasonList = cleanUp(vegB, vegAllYearAround);
		}
		else if (foodItem === "AB" && season === "AYA") {
			bloodFruitSeasonList = cleanUp(fruitAB, fruitAllYearAround);
			bloodVegSeasonList = cleanUp(vegAB, vegAllYearAround);
		}
		else if (foodItem === "Z" && season === "AYA") {
			bloodFruitSeasonList = fruitAllYearAround;
			bloodVegSeasonList = vegAllYearAround;
		}
		var newDataF = removeFruitDuplicates(bloodFruitSeasonList);
		
		// add this data to the page
		
		$("#fruitList").empty();
		$("#fruitList").prepend("Fruits");
		
		newDataF.forEach(function(val)	{
			// create a list item  for each val
			var li = $("<li>"+ val +"</li>");
			// append that list item to the var ul
			$("#fruitList").append(li);
			//.text("Fruits").css();
		});

		var newDataV = removeVegDuplicates(bloodVegSeasonList);

		$("#vegList").empty();
		$("#vegList").prepend("Vegetables");
		newDataV.forEach(function(val)	{
			// create a list item  for each val
			var li = $("<li>"+ val +"</li>");
			// append that list item to the var ul
			$("#vegList").append(li);
		});
		
		if (season === "Win") {
			$("body").css({"background-image": "url(Images/winter.jpg)"});
		}
		else if (season === "Spr") {
			$("body").css({"background-image": "url(Images/spring.jpg)"});
		}
		else if (season === "Sum") {
			$("body").css({"background-image": "url(Images/summer.jpg)"});
		}
		else if (season === "Aut") {
			$("body").css({"background-image": "url(Images/fall.jpg)"});
		}
		else if (season === "AYA") {
			$("body").css({"background-image": "url(Images/main.jpg)"});
		}

	});

});


// // jQuery version
// still working on

// var bloodFruitSeasonList = [];
// 		bloodVegSeasonList = [];
// 		bloodtype = $('#bloodtype').val();
// 		season = $('#season').val();
// 		fruitList = $('#fruitList');
// 		vegList = $('#vegList');
//    	result = $('#result');
 

// // cleaning up found fruits & veggies 
// function cleanUpArr(arr1, arr2) {
// 	newArr = [];
// 	arr1.each(function(arr1val) {
// 		arr2.each(function(arr2val) {
// 			if(arr1.inArray(arr2val) !== -1) {
// 				newArr.push(arr2val);
// 			}
// 		});
// 	});
// 	return newArr;
// }
// function removeFruitDuplicates(arr) {
// 	newBloodFruitSeasonList = [];
// 	arr.each(function(val) {
// 		if(newBloodFruitSeasonList.inArray(val) === -1) {
// 			newBloodFruitSeasonList.push(val);
// 		}
// 	});
// 	return newBloodFruitSeasonList;
// }
// function removeVegDuplicates(arr) {
// 	newBloodVegSeasonList = [];
// 	arr.each(function(val) {
// 		if(newBloodVegSeasonList.inArray(val) === -1) {
// 			newBloodVegSeasonList.push(val);
// 		}
// 	});
// 	return newBloodVegSeasonList;
// }

// // appending list to body

// function addFruitToList(arr) {
// 	arr.each(function(item) {
// 		fruitItem = $('<li>'+item+'</li>');
// 		return fruitItem;
// 	});
// 	fruitList.prepend('Fruits').css({'text-decoration': 'underline'});
// 	fruitList.append(fruitItem);
// }
// // function addFruitToList(arr) {
// // 	fruitList.prepend('Fruits').css({'text-decoration': 'underline'});
// // 	arr.each(function(item) {
// // 		fruitItem = $('<li>'+item+'</li>');
// // 	});
// // 	fruitList.append(fruitItem);
// // }
// // function addVegToList(arr) {
// // 	vegList.prepend('Vegetables').css({'text-decoration': 'underline'});
// // 	arr.each(function(item) {
// // 		vegItem = $('<li>'+item+'</li>');
// // 	});
// // 	vegList.append(vegItem);
// // }
// function backgroundSeason(val) {
// 	if(val === 'Win') {
// 		$('body').css({'background-image': 'url(Images/winter.jpg)'});
// 	} else if(val === 'Spr') {
// 		$('body').css({'background-image': 'url(Images/spring.jpg)'});
// 	} else if(val === 'Sum') {
// 		$('body').css({'background-image': 'url(Images/summer.jpg)'});
// 	} else if(val === 'Fall') {
// 		$('body').css({'background-image': 'url(Images/fall.jpg)'});
// 	} else if(val === 'AYA') {
// 		$('body').css({'background-image': 'url(Images/main.jpg)'});
// 	}
// }
// // finding food values and compare to blood type
// function findFoodByBlood(val1, val2) {
// 	// winter 
// 	if(val1 === 'O' && val2 === 'Win') {
// 		bloodFruitSeasonList = cleanUpArr(fruitO, fruitWinter);
// 		bloodVegSeasonList = cleanUpArr(vegO, vegWinter);
// 	} else if(val1 === 'A' && val2 === 'Win') {
// 		bloodFruitSeasonList = cleanUpArr(fruitA, fruitWinter);
// 		bloodVegSeasonList = cleanUpArr(vegA, vegWinter);
// 	} else if(val1 === 'B' && val2 === 'Win') {
// 		bloodFruitSeasonList = cleanUpArr(fruitB, fruitWinter);
// 		bloodVegSeasonList = cleanUpArr(vegB, vegWinter);
// 	} else if(val1 === 'AB' && val2 === 'Win') {
// 		bloodFruitSeasonList = cleanUpArr(fruitAB, fruitWinter);
// 		bloodVegSeasonList = cleanUpArr(vegAB, vegWinter);
// 	} else if(val1 === 'Z' && val2 === 'Win') {
// 		bloodFruitSeasonList = fruitWinter;
// 		bloodVegSeasonList = vegWinter;
// 	} 
// 	// spring
// 	else if(val1 === 'O' && val2 === 'Spr') {
// 		bloodFruitSeasonList = cleanUpArr(fruitO, fruitSpring);
// 		bloodVegSeasonList = cleanUpArr(vegO, vegSpring);
// 	} else if(val1 === 'A' && val2 === 'Spr') {
// 		bloodFruitSeasonList = cleanUpArr(fruitA, fruitSpring);
// 		bloodVegSeasonList = cleanUpArr(vegA, vegSpring);
// 	} else if(val1 === 'B' && val2 === 'Spr') {
// 		bloodFruitSeasonList = cleanUpArr(fruitB, fruitSpring);
// 		bloodVegSeasonList = cleanUpArr(vegB, vegSpring);
// 	} else if(val1 === 'AB' && val2 === 'Spr') {
// 		bloodFruitSeasonList = cleanUpArr(fruitAB, fruitSpring);
// 		bloodVegSeasonList = cleanUpArr(vegAB, vegSpring);
// 	} else if(val1 === 'Z' && val2 === 'Spr') {
// 		bloodFruitSeasonList = fruitSpring;
// 		bloodVegSeasonList = vegSpring;
// 	} 
// 	// summer
// 	else if(val1 === 'O' && val2 === 'Sum') {
// 		bloodFruitSeasonList = cleanUpArr(fruitO, fruitSummer);
// 		bloodVegSeasonList = cleanUpArr(vegO, vegSummer);
// 	} else if(val1 === 'A' && val2 === 'Sum') {
// 		bloodFruitSeasonList = cleanUpArr(fruitA, fruitSummer);
// 		bloodVegSeasonList = cleanUpArr(vegA, vegSummer);
// 	} else if(val1 === 'B' && val2 === 'Sum') {
// 		bloodFruitSeasonList = cleanUpArr(fruitB, fruitSummer);
// 		bloodVegSeasonList = cleanUpArr(vegB, vegSummer);
// 	} else if(val1 === 'AB' && val2 === 'Sum') {
// 		bloodFruitSeasonList = cleanUpArr(fruitAB, fruitSummer);
// 		bloodVegSeasonList = cleanUpArr(vegAB, vegSummer);
// 	} else if(val1 === 'Z' && val2 === 'Sum') {
// 		bloodFruitSeasonList = fruitSummer;
// 		bloodVegSeasonList = vegSummer;
// 	} 
// 	// fall
// 	else if(val1 === 'O' && val2 === 'Aut') {
// 		bloodFruitSeasonList = cleanUpArr(fruitO, fruitAutumn);
// 		bloodVegSeasonList = cleanUpArr(vegO, vegAutumn);
// 	} else if(val1 === 'A' && val2 === 'Aut') {
// 		bloodFruitSeasonList = cleanUpArr(fruitA, fruitAutumn);
// 		bloodVegSeasonList = cleanUpArr(vegA, vegAutumn);
// 	} else if(val1 === 'B' && val2 === 'Aut') {
// 		bloodFruitSeasonList = cleanUpArr(fruitB, fruitAutumn);
// 		bloodVegSeasonList = cleanUpArr(vegB, vegAutumn);
// 	} else if(val1 === 'AB' && val2 === 'Aut') {
// 		bloodFruitSeasonList = cleanUpArr(fruitAB, fruitAutumn);
// 		bloodVegSeasonList = cleanUpArr(vegAB, vegAutumn);
// 	} else if(val1 === 'Z' && val2 === 'Aut') {
// 		bloodFruitSeasonList = fruitAutumn;
// 		bloodVegSeasonList = vegAutumn;
// 	} 
// 	// allYearAround
// 	else if(val1 === 'O' && val2 === 'AYA') {
// 		bloodFruitSeasonList = cleanUpArr(fruitO, fruitAllYearAround);
// 		bloodVegSeasonList = cleanUpArr(vegO, vegAllYearAround);
// 	} else if(val1 === 'A' && val2 === 'AYA') {
// 		bloodFruitSeasonList = cleanUpArr(fruitA, fruitAllYearAround);
// 		bloodVegSeasonList = cleanUpArr(vegA, vegAllYearAround);
// 	} else if(val1 === 'B' && val2 === 'AYA') {
// 		bloodFruitSeasonList = cleanUpArr(fruitB, fruitAllYearAround);
// 		bloodVegSeasonList = cleanUpArr(vegB, vegAllYearAround);
// 	} else if(val1 === 'AB' && val2 === 'AYA') {
// 		bloodFruitSeasonList = cleanUpArr(fruitAB, fruitAllYearAround);
// 		bloodVegSeasonList = cleanUpArr(vegAB, vegAllYearAround);
// 	} else if(val1 === 'Z' && val2 === 'AYA') {
// 		bloodFruitSeasonList = fruitAllYearAround;
// 		bloodVegSeasonList = vegAllYearAround;
// 	}
// 	newFruitList = removeFruitDuplicates(bloodFruitSeasonList);
// 	newVegList = removeVegDuplicates(bloodVegSeasonList);
// }

// function fruitAppend(seasonVal) {
// 	fruitList.prepend('Fruits').css('text-decoration', 'underline');
// 		seasonVal.each(function(item) {
// 			fruitList.append('<li>'+item+'</li>');
// 		});
// }
// function seasonFruitVal(val) {
// 	if(val === 'AYA') {
// 		backgroundSeason(val);
// 		fruitAppend(fruitAllYearAround);
// 	} else if(val === 'Win') {
// 		backgroundSeason(val);
// 		fruitAppend(fruitWinter);
// 	} else if(val === 'Spr') {
// 		backgroundSeason(val);
// 		fruitAppend(fruitSpring);
// 	} else if(val === 'Sum') {
// 		backgroundSeason(val);
// 		fruitAppend(fruitSummer);
// 	} else if(val === 'Aut') {
// 		backgroundSeason(val);
// 		fruitAppend(fruitAutumn);
// 	}
// }
// function simpleclick() {
// 	result.on({
// 		click: function(e) {
// 			e.preventDefault();
// 			seasonFruitVal(season);
// 		}
// 	});
// }
// // test 
// function test(string) {
// 	$('#test').append('<li>'+string+'</li>');
// }

// $(function() {
// var bloodFruitSeasonList = [];
// 		bloodVegSeasonList = [];
// 	simpleclick();
// });
