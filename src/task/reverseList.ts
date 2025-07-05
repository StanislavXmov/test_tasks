import { ListNode } from "./mergeTwoLists";

// const l1 = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
// const l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const l1 = new ListNode();

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const next = (head: ListNode, tail: ListNode) => {
    const currentNext = head.next;
    const currentTail = tail;

    tail = head;
    tail.next = currentTail;

    if (!currentNext) {
      return tail;
    } else {
      return next(currentNext, tail);
    }
  };

  if (head.next) {
    return next(head.next, new ListNode(head.val));
  }

  return head;
}

console.log(reverseList(l1));
