import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent implements OnInit {

  name:string;
  model:string;
  speed:number;
  colors:Colors;
  options:string[];
  test:any;
  isEdit:boolean = false;


  constructor() { }

//задание значения в поля
  ngOnInit(): void {
    this.speed = 235;
    this.name = 'Audi ';
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебрянный'
    };
    this.options = ["ABS","Автопилот","Авто Паркинг"];
    this.test = true;
  }

ShowEdit(){
  this.isEdit = !this.isEdit;
}

// Добавление в массив нового элемента в начало
  addOpt(option) {
    this.options.unshift(option);
    return false;

  }
// Редактирование "возможностей"
deleteOpt(option) {
   console.log(option); //запись в консоль названия элемента массива
   for(let i = 0; i< this.options.length; i++){ //проход по массиву
     if(this.options[i] == option) //проверка на элемент
     this.options.splice(i,1); //удаление элемента
     break; // выход из цикла не удалять повторы
   }
}

  carSelect(carName) {
        if(carName =='bmw'){
            this.speed = 235;
            this.name = 'BMW ';
            this.model = 'M5';
            this.colors = {
              car: 'Синий',
              salon: 'Белый',
              wheels: 'Серебрянный'
              };
            this.options = ["ABS","Автопилот","Авто Паркинг"];
            this.test = true;
        } else if (carName == 'audi') {
            this.speed = 200;
            this.model = 'audi';
            this.colors = {
              car: 'Синий',
              salon: 'Белый',
              wheels: 'Серебрянный'
              };
            this.options = ["Открытие дверей","Ведение полосы"];
            this.test = true;
        } else if (carName == 'mer') {
          this.speed = 180;
          this.name = 'Mersedes ';
          this.model = 'W210';
          this.colors = {
            car: 'Синий',
            salon: 'Белый',
            wheels: 'Серебрянный'
            };
          this.options = ["Трезвый водитель","Авто Круиз"];
          this.test = true;
    }

  }



}

interface Colors {
    car:string,
    salon:string,
    wheels:string
}
