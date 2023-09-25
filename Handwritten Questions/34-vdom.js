/*
 * @Author: Felicity💪
 * @Date: 2023-09-25 23:38:58
 * @LastEditTime: 2023-09-25 23:55:38
 */

// vDom

const vDom = {
  tag: 'DIV',
  attrs: {
    id: 'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}

function _render(vNode) {
  if (typeof vNode === 'number') {
    vDom = String(vNode)
  }
  if (typeof vNode === 'string') {
    return document.createTextNode(vDom)
  }
  const dom = document.createElement(vNode.tag)
  if (vNode.attrs) {
    Object.keys(vNode.attrs).forEach(key => {
      const value = vNode.attrs[key]
      dom.setAttribute(key, value)
    })
  }
  vNode.children.forEach(child => dom.appendChild(_render(child)))
  return dom
}

_render(vDom)