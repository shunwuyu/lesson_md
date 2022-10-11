const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello JSX!'
    }
}


// JSX
// const d1 = <div></div>
// // 虚拟DOM => { type: 'div' }
// // const divDOM = document.createElement('div')

// <div>123</div>
// // 虚拟DOM => { type: 'div', props: { chilren: '123' } }

<div className="tab">123</div>
// 虚拟DOM => { type: 'div', props: { className: 'tab', chilren: '123' } }


