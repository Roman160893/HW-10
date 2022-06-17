class Student {
   constructor(university, course, fullName, rating) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.rating = rating;
   }
   getInfo() {
      return `Студент ${this.course} ${this.university} ${this.fullName} `
   }
   excluded = false;
   get marks() {
      if (this.excluded) {
         return null;
      }
      return this.rating
   }
   set marks(mark) {
      return this.rating.push(mark)
   }
   getAverageMark() {
      let averageMark = this.rating.reduce((a, b) => {
         return a + b
      }, 0);
      return (averageMark / this.rating.length).toFixed(1);
   }
   get dismiss() {
      this.excluded = true;
      return `Вибачте, але студента, ${this.fullName}, виключено`
   }
   get recover() {
      this.excluded = false;
      return `Студента, ${this.fullName}, поновлено`
   }
}
let student = new Student('Національна академія ДПСУ', '4 курсу', 'Демчук Роман', [5, 4, 5, 5, 4]);

console.log(`Загальна інформація про студента:`, student.getInfo())
console.log(`Успішність студента:`, student.marks)
student.marks = 5
console.log(`Успішність студента після додавання оцінки сеттером marks:`, student.marks)
console.log(`Середній бал успішності студента:`, student.getAverageMark())
console.log(student.dismiss)
console.log(`Спроба вивести успішність після виключення:`, student.marks)
console.log(student.recover)
console.log(`Спроба вивести успішність після поновлення:`, student.marks)

class BudgetStudent extends Student {
   constructor(university, course, fullName, rating) {
      super(university, course, fullName, rating)
      setInterval(() => {
         this.getScholarship
      }, 30000);
   }
   get getScholarship() {
      if (this.excluded === false && this.getAverageMark() >= 4) {
         console.log(`Ви отримали 1400 грн. стипендії, ваш середній бал: ${this.getAverageMark()}`)
      } else if (this.excluded === false && this.getAverageMark() < 4) {
         console.log(`Стипендії не буде, ваш середній бал: ${this.getAverageMark()}`)
      } else {
         console.log('Студента виключено')
      }
   }
}

const budgetStudent = new BudgetStudent('Львівський національний університет імені Івана Франка', '3 курс', 'Іван Іванович', [5, 5, 3]);
budgetStudent.getScholarship