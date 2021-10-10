class TowerOfHanoi{
    move(numberOfDisc: number, fromTower:string, toTower: string, auxTower: string){
        if (numberOfDisc == 1){
            console.log(`Move Disc ${numberOfDisc} from ${fromTower} to ${toTower}`);
        }
        else{
            this.move(numberOfDisc-1, fromTower, auxTower, toTower);
            console.log(`Move Disc ${numberOfDisc} from ${fromTower} to ${auxTower}`);
            this.move(numberOfDisc-1,auxTower, toTower, fromTower);
        }
    }
}

let towerObject: TowerOfHanoi = new TowerOfHanoi();
let numberOfDisc: number = 4;
towerObject.move(numberOfDisc, 'A', 'B', 'C');
