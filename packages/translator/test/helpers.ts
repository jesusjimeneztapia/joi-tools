type Key = 'label' | 'limit' | 'types' | 'error.message'

export function replaceInMessage(
  message: string,
  keys: Partial<Record<Key, string | number | string[]>>
) {
  let result = message
  Object.entries(keys).forEach(([key, value]) => {
    if (typeof value === 'string' && !key.includes('.')) {
      value = `"${value}"`
    }
    if (value instanceof Array) {
      value = `[${value.join(', ')}]`
    }
    result = result.replace(`{{#${key}}}`, value.toString())
  })
  return result
}
