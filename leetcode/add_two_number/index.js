// 链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let a = []
    , b = []
    , newL1 = l1
    , newL2 = l2;

  while (newL1) {
    a.push(newL1.val);
    newL1 = newL1.next;
  }
  

  while (newL2) {
    b.push(newL2.val);
    newL2 = newL2.next;
  }

  // console.log(b, '++++++');

  a.reverse();
  b.reverse();

  let ans = [];
  let add = 0;

  while (a.length || b.length) {
    let c = a.length ? a.shift() : 0;
    let d = b.length ? b.shift() : 0;
    let sum = c + d + add;

    ans.push(sum % 10);
    if (sum >= 10) {
      add = 1;
    } else {
      add = 0;
    }
  }

  add && (ans.push(add));
  // console.log(ans, '???????');
  ans.reverse();

  let ret = [];

  for (let i = 0, len = ans.length; i < len; i++)
    ret[i] = new ListNode(ans[i]);

  for (let i = 0, len = ans.length; i < len - 1; i++)
    ret[i].next = ret[i + 1];
  
  console.log(ret);

  return ret[0];
};


let a1 = new ListNode(1),
  a2 = new ListNode(2),
  a3 = new ListNode(3),
  a4 = new ListNode(4),
  a5 = new ListNode(5),
  a6 = new ListNode(6),
  a7 = new ListNode(7),
  a8 = new ListNode(8),
  a9 = new ListNode(9),
  a10 = new ListNode(8),
  a11 = new ListNode(7),
  a12 = new ListNode(6);
  a1.next = a2;
  a2.next = a3;
  a3.next = a4;
  a4.next = a5;
  a5.next = a6;
  a6.next = a7;
  a7.next = a8;
  a8.next = a9;
  a9.next = a10;
  a10.next = a11;
  a11.next = a12;

let b1 = new ListNode(1),
  b2 = new ListNode(2),
  b3 = new ListNode(3),
  b4 = new ListNode(4),
  b5 = new ListNode(5),
  b6 = new ListNode(6),
  b7 = new ListNode(7),
  b8 = new ListNode(8),
  b9 = new ListNode(9),
  b10 = new ListNode(8),
  b11 = new ListNode(7),
  b12 = new ListNode(6),
  b13 = new ListNode(5),
  b14 = new ListNode(4),
  b15 = new ListNode(3),
  b16 = new ListNode(2),
  b17 = new ListNode(1);

  b1.next = b2;
  b2.next = b3;
  b3.next = b4;
  b4.next = b5;
  b5.next = b6;
  b6.next = b7;
  b7.next = b8;
  b8.next = b9;
  b9.next = b10;
  b10.next = b11;
  b11.next = b12;

let ret = addTwoNumbers(a1, b1);
while(ret) {
  console.log(ret.val);
  ret = ret.next;
}