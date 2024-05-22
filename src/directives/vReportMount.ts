import type { Directive } from 'vue'

/**
 * This custom directive is intended to report if certain components are mounted.
 * It is useful to test if a component that should not be mounted is mounted.
 */
export const vReportMount: Directive = {
  mounted(el) {
    console.error('Component is mounted:', el)
  }
}
