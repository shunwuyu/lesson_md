import OrderedList from "./lib/ordered_list";

const orderedList = new OrderedList();
orderedList.insert(12);
orderedList.insert(11);
orderedList.insert(18);
orderedList.insert(1);

console.log(orderedList.toString());