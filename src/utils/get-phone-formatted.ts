export const getFormattedPhone = (phone: string) => {
  const fragmentNumber = phone.replace(/\D/g, '');

  const countryCode = fragmentNumber.slice(0, 2);
  const ddd = fragmentNumber.slice(2, 4);
  const parte1 = fragmentNumber.slice(4, 9);
  const parte2 = fragmentNumber.slice(9, 13);

  return `+${countryCode} (${ddd}) ${parte1}-${parte2}`;
}