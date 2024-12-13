import { TreeNode } from "./isSymmetric";

export function sortedArrayToBST(nums: number[]): TreeNode | null {

  const getNode = (nums: number[]) => {
    if (nums.length > 0) {
      const middle = Math.floor(nums.length / 2);
      const tree = new TreeNode(nums[middle]);
      tree.left = getNode(nums.splice(0, middle));
      tree.right = getNode(nums.splice(1));
      return tree;
    } else {
      return null;
    }
  }

  return getNode(nums);
};

// const nums = [-10,-3,0,5,9];

// console.log(sortedArrayToBST(nums));