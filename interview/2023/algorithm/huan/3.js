function hasCycle(head) {
    let one=head;
    let two=head;
    while(two!=null&&two.next!=null){
        one=one.next;
        two=two.next.next;
        if(one===two){
            return true;
        }
    }
    return false;
}
