import {TreeNode, lowestCommonAncestor} from '../src/task/lowestCommonAncestor';

const root = new TreeNode(
  6, 
  new TreeNode(
    2, 
    new TreeNode(0, null, null),
    new TreeNode(4, 
      new TreeNode(3, null, null),
      new TreeNode(5, null, null)
    )
  ), 
  new TreeNode(
    8, 
    new TreeNode(7, null, null), 
    new TreeNode(9, null, null)
  )
);

test('lowestCommonAncestor', () => {
  expect(lowestCommonAncestor(root, new TreeNode(2, null, null), new TreeNode(8, null, null))?.val).toStrictEqual(6);
});