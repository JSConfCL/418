export const formatDate = (dateString: string): string => {
  if (!dateString) {
    return "";
  }

  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "Mayo",
    "Jun",
    "Jul",
    "Ago",
    "Sept",
    "Oct",
    "Nov",
    "Dic",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();

  return `${day} de ${months[monthIndex]}`;
};
