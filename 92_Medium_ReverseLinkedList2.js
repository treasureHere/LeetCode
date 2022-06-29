/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let revPrev;
var reverseBetween = function(head, left, right) {
    if(left == right)
        return head;
    let i=0;
    let prev = null;
    let head1 = head;
    while(i < left-1){
        prev= head;
        head= head.next;
        i++;
    }
    let temp = head;
    let revOp;
    if(head){
       revOp = reverseList(head, i, right-1, null);
       temp.next = revOp?.head;
     }
    if(left != 1){
        prev.next = revOp?.prev
        return head1;
    }
    
    return revOp?.prev
};

function reverseList(head, start, end, prev){
  //  console.log('reverseList', {start}, {end}, prev?.val, head?.val)
    if(start > end)          
        return {prev,  head};
        
    let temp = head?.next;
    head.next = prev;
    return reverseList(temp, start+1, end, head)
    
}