"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    add(data) {
        //create new node with a payload of data<U>
        let node = new ListNode_1.default(data);
        //start at this.head
        //if null => set head to new node
        if (this.head = null) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        //else call next until current node.next = null
        //set current.next to new node
    }
    deleteAt(index) {
        //star at head
        if (this.head == null) {
            return null;
        }
        else if (index == 0) {
            let data = this.head.data;
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            oldHead.data = null;
            return data;
        }
        else {
            let current = this.head;
            let previous = current;
            let count = 0;
            while (count <= index && current.next) {
                previous = current.next;
                current = current.next;
                count++;
            }
            if (index > count) {
                return null;
            }
            else {
                let data = current.data;
                previous.next = current.next;
                current.next = null;
            }
        }
        //count until count == index
        //keep track of the previous node, current node, next node
        //link previous.next to next and null out the current
        // return current data
        return null;
    }
    insertAt(index, data) {
    }
    print() {
        //print to console
        if (this.head != null) {
            let arr = [];
            let current = this.head;
            while (current.next != null) {
                arr.push(current);
                current = current.next;
            }
            arr.push(current.data);
            console.log(arr);
        }
        else {
            console.log('empty list');
        }
    }
}
//Test
let linky = new LinkedList();
linky.add('hell, ');
linky.add('world, ');
linky.add('carlo ');
linky.add('Larlo ');
linky.add('Aarlo ');
linky.add('Marlo ');
linky.deleteAt(3);
linky.print();
//# sourceMappingURL=LinkedList copy.js.map