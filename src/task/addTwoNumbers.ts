import { ListNode } from "./mergeTwoLists";

export function addTwoNumbers(
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
