export function FormatDate(date: string) {
  return Intl.DateTimeFormat("pt-BR").format(new Date(date));
}
