function changeColor(color) {
	console.log(color);
}
function main() {
	changeColor('红灯');
	setTimeout(()=>{
		changeColor('黄灯');
		setTimeout(() => {
			changeColor('绿灯');
			setTimeout(main, 3000);
		}, 1000);
	}, 2000);
}
main();