import { computed } from 'vue'

export function useStrokeAttrs(props) {
  return computed(() => {
    const attrs = {}

    if (props.strokeColor) {
      attrs.stroke = props.strokeColor
    }
    if (props.strokeWidth) {
      attrs['stroke-width'] =
        typeof props.strokeWidth === 'number' ? props.strokeWidth : String(props.strokeWidth)
    }

    return attrs
  })
}
