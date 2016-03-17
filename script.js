/*1*/
var x = prompt('Введите число x', '');
var n = prompt('Введите степень n', '');
var sum = x;
f (x,n);
function f(x, n){
	for (var i=1;i<n;i++){
	sum*=x;
}
	console.log("Полученное число = ",sum);
	
return f;

}

/*2*/
var Name = [];


for(var x = 0; x < 5; x++) {
	var inputName = prompt('Заполняем массив :','')
	
	Name[x] = inputName;

	console.log( Name[x] );
	
}
 alert('Мы имеем массив:'+ Name);
var userName = prompt('Введите имя пользователя','');
 
function find(array) {
	for (var i = 0; i < array.length; i++) {
     if ( array[i] == userName ) return true;
  }

  	return false;
}

if( find(Name) == true ){
  alert(userName+" Вы успешно вошли")
}
else{
  alert('Ошибка')
}	






