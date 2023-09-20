// processes an array of interval strings, extracting the numeric part
// and replacing 'm' with '♭' if present, then returns the processed intervals as an array.
export function processIntervals(intervals) {
  const result = [];
  for (const interval of intervals) {
    // Extract the number part from the interval
    const numberPart = interval.match(/\d+/);
    if (numberPart) {
      // Check if the interval contains 'm' for minor and replace it with '♭'
      const processedInterval = interval.includes("m")
        ? `${numberPart[0]}♭`
        : numberPart[0];
      result.push(processedInterval);
    }
  }
  return result;
}
