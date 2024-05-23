export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return date
    .toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
    .replace(",", "");
};
