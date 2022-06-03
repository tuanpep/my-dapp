export default function useAccountEllipsis(account: string) {
  return `${account.substring(0, 2)}...${account.substring(account.length - 4)}`;
}
