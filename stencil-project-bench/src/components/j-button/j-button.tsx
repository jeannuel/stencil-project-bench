import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'j-button',
  styleUrl: 'j-button.scss',
  shadow: true,
})
export class JButton {
  @Prop() disabled: boolean = false;
  @Prop() variant: 'contained' | 'outlined' = 'contained';
  @Prop() type: string;
  @Prop() isDraggable: boolean = false;
  @Event() jClick: EventEmitter<boolean>;

  handleClick = () => {
    this.jClick.emit(true);
  };

  setClassNames(): string {
    const { variant } = this;
    return classNames('j-button', variant);
  }

  render() {
    const { type, disabled, isDraggable } = this;
    return (
      <button type={type} disabled={disabled} onClick={this.handleClick} class={this.setClassNames()} draggable={isDraggable}>
        <slot></slot>
      </button>
    );
  }
}
