function wrapping(gifts: string[]): string[] {
  const res: string[] = gifts.map((gift) => {
    const paper: string = '*'.repeat(gift.length + 2);

    return `${paper}\n*${gift}*\n${paper}`;
  });

  return res;
}
