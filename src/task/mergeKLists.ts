import { ListNode } from "./mergeTwoLists";

// lists = [[1,4,5],[1,3,4],[2,6]]
// new ListNode()
// const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const l3 = new ListNode(2, new ListNode(6));

const l1 = new ListNode(1);
const l2 = new ListNode(0);

const lists = [l1, l2];
// const lists = [l1, l2, l3];

function findMinHead(lists: Array<ListNode | null>) {
  let idx = 0;
  let min: number | undefined;

  if (lists.filter(Boolean).length === 0) {
    return -1;
  }

  for (let i = 0; i < lists.length; i++) {
    const l = lists[i];
    if (min === undefined && l) {
      min = l?.val;
      idx = i;
    } else if (
      min !== undefined &&
      typeof l?.val === "number" &&
      min > l?.val
    ) {
      min = l.val;
      idx = i;
    }
  }

  return idx;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const mergedList = new ListNode();
  if (lists.length === 0) {
    return null;
  }
  let tempList = mergedList;

  const getMinHead = (lists: Array<ListNode | null>) => {
    const idx = findMinHead(lists);
    if (idx === -1) {
      return;
    }
    tempList.next = new ListNode(lists[idx]?.val);
    tempList = tempList.next;
    lists[idx] = lists[idx]?.next || null;

    getMinHead(lists);
  };

  getMinHead(lists);

  return mergedList.next;
}

console.log(mergeKLists(lists));
// console.log(mergeKLists([new ListNode()]));
