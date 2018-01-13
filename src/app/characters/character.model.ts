type bloodType = 'A' | 'B' | 'O' | 'AB';
type sex = '男' | '女' | '他';
export interface Character {
    name: string;
    age: number;
    sex: sex;
    bloodType: bloodType;
    comment: string;
}