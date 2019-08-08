import ListNode from './ListNode';

class LinkedList<U> {
    constructor(
        private head = null as ListNode<U>
    ) {}

    add(data: U): void {
        // create new node with a payload of data
        let node = new ListNode<U>(data)
        // start at this.head
        // check if null => set head to new node
        if(this.head === null) {
            this.head = node;
        } else {
        // else call next until current node.next = null
        let current = this.head;
        while (current.next != null){
            current = current.next 
        }
        // set current.next to new node
        current.next = node
        }
      
    } 

    deleteAt(index: number): U {
        // start at head
        if (this.head == null){
            return null as U
        } else if(index == 0){
            let data= this.head.data
            let oldHead = this.head
            this.head = this.head.next
            oldHead.next = null
            oldHead.data = null
            return data
        } 
        else {
            let current = this.head
            let previous = current
            let count = 0;
            while (count < index && current.next) {
                previous = current
                current = current.next
                count++
            }
            if(index > count){
                return null as U
            } else { 
                let data = current.data
                previous.next = current.next
                current.next = null
                current.data = null
                return data
            }
        }
        // count until count == index
        // keep track of previous node, current node, next node
        // link previous.next to next
        // return current.data
        return null as U
    }

    insertAt(index: number, data: U): void {
        // Come back to write the code
    }

    print(): void{
        // print to console!
        if(this.head != null){
            let arr: any[] = []
            let current = this.head
            while( current.next != null){
                arr.push(current)
                current = current.next
            }
            arr.push(current.data)
            console.log(arr)
        }else{
            console.log('Empty List');
        }
    }

}


// Test

let linky = new LinkedList<string>()
// linky.add('Hello, ');
// linky.add('World, ');
// linky.add('Tyson');
// linky.add('Lucy');
// linky.add('Luke');
// linky.add('Wayne');



linky.print();

linky.deleteAt(3);

linky.print();
