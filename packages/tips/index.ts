/*
 * @Author: maggot-code
 * @Date: 2021-04-20 14:00:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-20 17:05:08
 * @Description: file content
 */
interface Person {
    name: string;
    age: number;
}

function sayHi(person: Person): string {
    const { name, age } = person;
    return `Hi,${name},age1 ? ${age}`;
}

const hihi = sayHi({ name: 'aaa', age: 143 });

console.log(hihi);