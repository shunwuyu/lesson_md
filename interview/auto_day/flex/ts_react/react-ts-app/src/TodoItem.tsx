import * as React from 'react';

interface Props {
  handleSubmit: (value: string) => void
}

interface State {
  itemText: string
}

// 有状态组件  state 
// export class TodoItem extends React.Component {
export class TodoItem extends React.Component<Props, State> {
  private inputRef = React.createRef<HTMLInputElement>()

  constructor(props: Props) {
    super(props)
    this.state = {
      itemText : ''
    }
  }

  private updateValue(value: string) {
    this.setState({ itemText: value })
  }

  render() {
    return (
      <input ref={this.inputRef} 
        className="edit"
        value={this.state.itemText}
      />
    )
  }

}