const detectCycle = function(head) {
    while(head){
        if(head.flag){
            return head;
        }else{
            head.flag = true;
            head = head.next;
        }
    }
    return null;
};