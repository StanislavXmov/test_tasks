import { ListNode } from "./mergeTwoLists";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0);
  let _l1 = l1,
    _l2 = l2,
    carry = 0,
    current = dummyHead;

  while (_l1 || _l2 || carry) {
    const n1 = _l1?.val || 0;
    const n2 = _l2?.val || 0;
    const sum = n1 + n2 + carry;
    const newListNode = new ListNode(sum % 10);
    current.next = newListNode;
    current = current.next;
    carry = sum >= 10 ? 1 : 0;

    if (_l1) {
      _l1 = _l1.next;
    }
    if (_l2) {
      _l2 = _l2.next;
    }
  }
  return dummyHead.next;
}

export function addTwoNumbers2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const _n1: number[] = [];
  const _n2: number[] = [];
  let _l1 = l1;
  while (_l1) {
    if (typeof _l1.val === "number") {
      _n1.unshift(_l1.val);
      _l1 = _l1.next;
    }
  }
  let _l2 = l2;
  while (_l2) {
    if (typeof _l2.val === "number") {
      _n2.unshift(_l2.val);
      _l2 = _l2.next;
    }
  }
  const n1 = BigInt(_n1.join(""));
  const n2 = BigInt(_n2.join(""));
  const sum = (n1 + n2).toString().split("");
  let result: ListNode | null = null;
  let tail: ListNode | null = null;
  for (let i = sum.length - 1; i >= 0; i--) {
    if (i === sum.length - 1) {
      result = new ListNode(Number(sum[i]));
      tail = result;
    } else {
      if (tail) {
        tail.next = new ListNode(Number(sum[i]));
        tail = tail.next;
      }
    }
  }
  return result;
}

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// const l1 = new ListNode(0);
// const l2 = new ListNode(0);

const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

console.log(addTwoNumbers(l1, l2));
