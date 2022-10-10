## Как пользоваться

1. Для начала необходимо установить зависимости командой `npm install`
2. Для запуска тестов используем команду `npm run test`

## Задача

Необходимо написать функцию, которая будет принимать в себя объект, ключи в виде строки указывающие путь к значению которое будет использовать метод, сам метод в виде строки и параметры данного метода в виде массива. Если путь по ключам не правильный, необходимо вернуть null. Передаваемые методы всегда будут методами значения к которому они применяются. Методы должны подставляться динамически без использования if else

### Пример:

(1)
объект = { a: { b: 1.795 } };
ключи = 'a.b';
метод = 'toFixed';
параметры = [2];

Результат должен быть таким же как если бы мы использовали следующую конструкцию: (объект.a.b.toFixed(2)) и в данном примере равным 1.79
(2)
объект = { a: { b: 1.795 } };
ключи = 'a.b.c';
метод = 'toFixed';
параметры = [2];

Поскольку объект.a.b.c не существует в переданном объекте, возвращаем null
