export function solution(array: number[], target: number) {
    let result: number[] = [-1, -1];
    let map: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < array.length; i++) {
        let remainder: number = target-array[i];
        if (map.has(remainder)){
            result[0] = map.get(remainder) as number;
            result[1] = i;
            return result;
        }
        else {
            map.set(array[i], i);
        }
    }
    return result;
}