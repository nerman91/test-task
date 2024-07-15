export const ScrollIcon = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="18" height="27.2432" rx="9" stroke={isDark ? '#101010' : '#FBFBFB'} />
      <rect
        x="9.3716"
        y="6.29055"
        width="0.256757"
        height="4.36486"
        rx="0.128378"
        stroke={isDark ? '#101010' : '#FBFBFB'}
        strokeWidth="0.256757"
      />
    </svg>
  );
};
