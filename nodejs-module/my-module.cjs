
const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  
  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [currentStart, currentEnd] = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    const [nextStart, nextEnd] = ranges[i];

    if (nextStart <= currentEnd + threshold) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      merged.push([currentStart, currentEnd]);
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }

  merged.push([currentStart, currentEnd]);
  return merged;
};

module.exports = {
  mergeTimeRanges
};
