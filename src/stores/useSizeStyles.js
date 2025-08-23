import { computed } from 'vue'

export function useSizeStyles(props) {
  return computed(() => {
    const style = {}
    if (props.width)
      style.width = typeof props.width === 'number' ? props.width + 'px' : props.width
    if (props.height)
      style.height = typeof props.height === 'number' ? props.height + 'px' : props.height
    return style
  })
}
