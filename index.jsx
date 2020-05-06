import React, { Component } from 'react'
import PropTypes from 'prop-types';
/**
 * Sticky 粘性布局
 * props 
 *  offsetTop: 吸顶时与顶部的距离
 *  zIndex : 吸顶式的 z-index
 *  unit: 吸顶时的单位 默认px
 *  
 */
export default class Sticky extends Component {
  constructor() {
    super()
    this.placeholderRef = React.createRef()
    this.stickyRef = React.createRef()
  }

  static propTypes = {
    offsetTop: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }

  static defaultProps = {
    'zIndex': 99,
    'unit': 'px'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    let stickyHeight = this.stickyRef.current.offsetHeight
    // 先获取一次高度
    this.stickyHeight = stickyHeight
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = e => {
    const { offsetTop } = this.props
    let clientRectTop = this.placeholderRef.current.getBoundingClientRect().top
    if (clientRectTop <= offsetTop) {
      const { unit, zIndex } = this.props
      // 防止频繁触发
      if (this.placeholderRef.current.offsetHeight == 0) {
        this.placeholderRef.current.style.height = this.stickyHeight + unit
        this.stickyRef.current.style.cssText = `position: fixed; top: ${offsetTop}${unit}; width: 100%; z-index: ${zIndex}`
      }
    } else {
      // 防止频繁触发
      if (this.placeholderRef.current.offsetHeight != 0) {
        this.placeholderRef.current.style.height = '0'
        this.stickyRef.current.style.cssText = ''
      }
    }
  }
  render() {
    return (
      <div>
        <div ref={this.placeholderRef}></div>
        <div ref={this.stickyRef}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
