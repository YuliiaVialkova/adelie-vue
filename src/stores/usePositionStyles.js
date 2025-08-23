import { computed } from 'vue'

export function usePositionStyles(props) {
  return computed(() => {
    const style = {}
    if (props.top) style.top = props.top
    if (props.left) style.left = props.left
    if (props.right) style.right = props.right
    if (props.bottom) style.bottom = props.bottom
    return style
  })
}
