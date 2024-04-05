export const constructOption = (value, label) => ({
    value: value || label,
    label: label ?? value,
  });