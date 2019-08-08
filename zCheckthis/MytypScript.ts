import ListNode from './ListNode'

class LinkedList<U> {
    constructor(
        private head = null as ListNode<U>
    ){}
    add(data: U): void {
        //create new node with a payload of data<U>
        let node = new ListNode<U>(data)
        //start at this.head
        //if null => set head to new node
        if(this.head = null){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next
            }
            current.next = node;
        }
    }
    deleteAt(index: number): U {
        //star at head
        if(this.head == null){
            return null as U
        }else if(index == 0){
            let data = this.head.data;
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead.next=null;
            oldHead.data = null;
            return data;
        }
        else{
            let current = this.head
            let previous = current;
            let count = 0;
            while(count <= index && current.next){
                previous = current.next;
                current = current.next;
                count++
            }if(index > count){
                return null as U;
            }else{
                let data = current.data;
                previous.next = current.next;
                current.next= null;
            }
        }
        //count until count == index
        //keep track of the previous node, current node, next node
        //link previous.next to next and null out the current
        // return current data
        return null as U
    }
    insertAt(index: number, data: U): void {

    }
    print(): void {
        //print to console
        if(this.head != null){
            let arr: any[]= [];
            let current= this.head;
            while(current.next != null){
                arr.push(current)
                current= current.next
            }
            arr.push(current.data)
            console.log(arr)
        }else{
            console.log('empty list');
        }
    }
}
//Test

let linky = new LinkedList<string>()
linky.add('hell, ');
linky.add('world, ');
linky.add('carlo ');
linky.add('Larlo ');
linky.add('Aarlo ');
linky.add('Marlo ');
linky.deleteAt(3);
linky.print();