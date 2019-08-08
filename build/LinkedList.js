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
        // create new node with a payload of data
        let node = new ListNode_1.default(data);
        // start at this.head
        // check if null => set head to new node
        if (this.head === null) {
            this.head = node;
        }
        else {
            // else call next until current node.next = null
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            // set current.next to new node
            current.next = node;
        }
    }
    deleteAt(index) {
        // start at head
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
            while (count < index && current.next) {
                previous = current;
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
                current.data = null;
                return data;
            }
        }
        // count until count == index
        // keep track of previous node, current node, next node
        // link previous.next to next
        // return current.data
        return null;
    }
    insertAt(index, data) {
        let node = new ListNode_1.default(data);
        if (index === 0) {
            let oldHead = this.head;
            node.next = oldHead;
            this.head = node;
        }
        else {
            let count = 0;
            let current = this.head;
            let previous = current;
            if (count < index && current.next) {
                previous = current;
                current = current.next;
                count = count + 1;
            }
            previous.next = node;
            node.next = current;
        }
        //! The insertAt function uses the following logic:
        //! 1. Find the node currently at the index of insertion and store a reference to it. Make sure to also keep track of the node before it, if present.
        //! 2. If there is a previous element, reassign it’s **next** property to the node you are inserting.
        //! 3. Assign the node currently at the index of insertion to the new node’s **next** property.
        //! 4. Make sure to update the list’s **head** if necessary.
    }
    print() {
        // print to console!
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
            console.log('Empty List');
        }
    }
}
// Test
let linky = new LinkedList();
linky.add('Hello, ');
linky.add('World, ');
linky.add('Tyson');
linky.add('Lucy');
linky.add('Luke');
linky.add('Wayne');
linky.print();
linky.deleteAt(3);
linky.insertAt(2, 'Samuel');
linky.insertAt(1, "Lidet");
linky.insertAt(4, "Helen");
linky.print();
//# sourceMappingURL=LinkedList.js.map