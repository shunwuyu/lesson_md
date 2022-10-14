class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    onAddToStage(event) {
        console.log('-------------');
        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.textColor = 0xff0000;
        textfield.text = 'hello world';
    }
}
window['Main']=Main;