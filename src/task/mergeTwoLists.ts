export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}


export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let list3: ListNode | null = null;
  let l3: ListNode | null = new ListNode();

  if (list1 === null || list2 === null) {
    return list1 === null ? list2 : list1;
  }
  while (list1 !== null && list2 !== null) {
    if (!list3) {
      if (list1.val < list2.val) {
        l3 = list1;
        list3 = l3;
        list1 = list1.next;
      } else {
        l3 = list2;
        list3 = l3;
        list2 = list2.next;
      }
    } else {
      if (list1.val < list2.val) {
        l3.next = list1;
        l3 = l3.next;
        list1 = list1.next;
      } else {
        l3.next = list2;
        l3 = l3.next;
        list2 = list2.next;
      }
    }
  }

  l3.next = list1 !== null ? list1 : list2;
  return list3;
};