import { ListNode } from "./mergeTwoLists";

// [3,2,0,-4]

const l1 = new ListNode(3);
const l2 = new ListNode(2);
const l3 = new ListNode(0);
const l4 = new ListNode(-4);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l2;

export function hasCycle(head: ListNode | null): boolean {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer!.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}
